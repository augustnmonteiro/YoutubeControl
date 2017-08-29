function parseQuery(qstr) {
  var query = {};
  var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split('&');
  for (var i = 0; i < a.length; i++) {
    if (!a[i]) {
      break;
    }
    var b = a[i].split('=');
    query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
  }
  return query;
}

function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4() + '-' + (+new Date()).toString(16);
}

function initDesktop() {
  if (!localStorage.getItem("id")) {
    localStorage.setItem("id", uuid());
  }
  app.id = localStorage.getItem("id");
  app.ref = app.db().ref('i/' + app.id);
  app.ref.set({
    video: "",
    volume: 50,
    state: "",
    connected: false
  });
  qr.image({
    image: document.querySelector("#QRCode"),
    value: location.href + "?i=" + app.id,
    size: 10
  });
  app.ref.on('child_changed', function (f) {
    switch (f.key) {
      case "connected":
        if (f.val() === true) {
          app.player.showPlayer();
        }
        break;
      case "state":
        switch (f.val()) {
          case "play":
            app.actions.play();
            break;
          case "pause":
            app.actions.pause();
            break;
        }
        break;
      case "video":
        app.actions.open(f.val());
        break;
      case "volume":
        app.actions.volume(f.val());
        break;
    }
  });
}

function initRemote() {
  app.ref = app.db().ref('i/' + app.id);
  app.ref.update({connected: true});
}

function load() {
  app.query = parseQuery(window.location.search);
  if (app.query.i) {
    app.id = app.query.i;
    app.control.render();
    initRemote();
  } else {
    app.player.render();
    initDesktop();
  }
}

window.addEventListener("load", load);
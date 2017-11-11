app.control = {

  createMediaControls: function createMediaControls() {
  },
  createSearch: function createSearch() {
  },

  search: function search() {
    var value = document.querySelector("#SearchInput").value;
    yt.search(value, this.renderVideosList);
    document.querySelector("#SearchInput").blur();
  },
  renderVideosList: function renderVideosList(list) {
    var ul = document.querySelector("#Videos"),
      fragment = document.createDocumentFragment();

    list.items.forEach(function (item) {
      var li = document.createElement("li");
      li.innerHTML = "<img class='thumb' src='" + item.snippet.thumbnails.default.url + "'>\n                <h3>" + item.snippet.title + "</h3>";
      li.onclick = function () {
        if (item.id.kind === "youtube#video") {
          app.ref.update({video: item.id.videoId});
        } else {
          alert("Sorry we can't open channels/playlist yet");
        }
      };
      fragment.appendChild(li);
    });
    ul.innerHTML = "";
    ul.appendChild(fragment);
  },
  render: function render() {
    hideAll();
    document.getElementById("Control").classList.remove("hide");
  }
};
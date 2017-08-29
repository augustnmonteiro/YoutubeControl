app.control = {

  html: "<div id=\"MediaControls\">\n    <button onclick=\"app.ref.update({state: 'play'});\">PLAY</button>\n    <button onclick=\"app.ref.update({state: 'pause'});\">PAUSE</button>\n    <input id=\"Volume\" oninput=\"app.ref.update({volume: this.value})\" type=\"range\" min=\"0\" max=\"100\"/>\n    <input type=\"text\" id=\"SearchInput\" placeholder=\"Search\" onkeydown=\"if (event.keyCode === 13) {app.control.search();}\"/>\n    </div>\n    <ul id=\"Videos\">\n\n    </ul>",

  createMediaControls: function createMediaControls() {},
  createSearch: function createSearch() {},
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
        app.ref.update({video: item.id.videoId});
      };
      fragment.appendChild(li);
    });
    ul.innerHTML = "";
    ul.appendChild(fragment);
  },
  render: function render() {
    document.getElementById("Content").innerHTML = this.html;
  }
};
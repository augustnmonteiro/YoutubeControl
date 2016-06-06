"use strict";

var Control = {

    content: document.getElementById("Content"),

    html: "<div id=\"MediaControls\">\n    <button onclick=\"conn.send({action: 'play'});\">PLAY</button>\n    <button onclick=\"conn.send({action: 'pause'});\">PAUSE</button>\n    <input id=\"Volume\" oninput=\"conn.send({action: 'volume', data: this.value});\" type=\"range\" min=\"0\" max=\"100\"/>\n    <input type=\"text\" id=\"SearchInput\" placeholder=\"Search\" onkeydown=\"if (event.keyCode === 13) {Control.search();}\"/>\n    </div>\n    <ul id=\"Videos\">\n\n    </ul>",

    createMediaControls: function createMediaControls() {},
    createSearch: function createSearch() {},
    search: function search() {
        var value = document.querySelector("#SearchInput").value;
        YoutubeAPI.search(value, this.renderVideosList);
        document.querySelector("#SearchInput").blur();
    },
    renderVideosList: function renderVideosList(list) {
        var ul = document.querySelector("#Videos"),
            fragment = document.createDocumentFragment();

        list.items.forEach(function (item) {
            var li = document.createElement("li");
            li.innerHTML = "<img class='thumb' src='" + item.snippet.thumbnails.default.url + "'>\n                <h3>" + item.snippet.title + "</h3>";
            li.onclick = function () {
                return conn.send({ action: 'open', data: item.id.videoId });
            };
            fragment.appendChild(li);
        });
        ul.innerHTML = "";
        ul.appendChild(fragment);
    },
    render: function render() {
        this.content.innerHTML = this.html;
    }
};
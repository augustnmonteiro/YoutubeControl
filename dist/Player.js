"use strict";

var Player = {

    youtubeFrameLoaded: false,

    html: "<div id=\"Config\">\n                <img id=\"QRCode\" src=\"\">\n           </div>",

    showPlayer: function showPlayer() {
        document.getElementById("Content").innerHTML = "<div id=\"Player\"></div>";

        if (!this.youtubeFrameLoaded) {
            loadIframeApi();
            this.youtubeFrameLoaded = true;
        } else {
            onYouTubeIframeAPIReady();
        }
    },
    render: function render() {
        document.getElementById("Content").innerHTML = this.html;
    }
};
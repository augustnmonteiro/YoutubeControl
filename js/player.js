app.player = {

    youtubeFrameLoaded: false,

    showPlayer: function showPlayer() {
        if (!this.youtubeFrameLoaded) {
            document.getElementById("Content").innerHTML = "<div id=\"Player\"></div>";
            loadIframeApi();
            this.youtubeFrameLoaded = true;
        }
    },
    render: function render() {
        document.getElementById("Content").innerHTML = this.html;
        document.getElementById("Content").innerHTML = "<div id=\"Config\">\n            <img id=\"QRCode\" src=\"\">\n       </div>";
    }
};
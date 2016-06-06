var Player = {

    content: document.getElementById("Content"),
    youtubeFrameLoaded: false,

    showPlayer () {
        if (!this.youtubeFrameLoaded) {
            document.getElementById("Content").innerHTML = `<div id="Player"></div>`;
            loadIframeApi();
            this.youtubeFrameLoaded = true;
        }
    },

    render () {
        document.getElementById("Content").innerHTML = this.html;
        this.content.innerHTML = `<div id="Config">
            <img id="QRCode" src="">
       </div>`;
    }
};
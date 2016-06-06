var Player = {

    youtubeFrameLoaded: false,

    html: `<div id="Config">
                <img id="QRCode" src="">
           </div>`,

    showPlayer () {
        document.getElementById("Content").innerHTML = `<div id="Player"></div>`;

        if (!this.youtubeFrameLoaded) {
            loadIframeApi();
            this.youtubeFrameLoaded = true;
        } else {
            onYouTubeIframeAPIReady();
        }
    },

    render () {
        document.getElementById("Content").innerHTML = this.html;
    }
};
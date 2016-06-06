var Actions = {

    open (videoId) {
        loadVideo(videoId);
    },

    play () {
        player.playVideo();
    },

    pause () {
        player.pauseVideo();
    },

    volume (value) {
        player.setVolume(value);
    },

    next () {

    },

    previous () {

    }

};

var Actions = {
    "OPENVIDEO": function (video) {
        console.log("VIDEO: ", video);
        loadVideo(video);
    },
    "PLAY" : function () {
        player.playVideo();
    },
    "PAUSE": function () {
        player.pauseVideo();
    },
    "VOLUME": function (volume) {
        console.log(volume);
        player.setVolume(volume);
    }
};

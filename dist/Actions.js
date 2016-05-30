"use strict";

var Actions = {
    "OPENVIDEO": function OPENVIDEO(video) {
        console.log("VIDEO: ", video);
        loadVideo(video);
    },
    "PLAY": function PLAY() {
        player.playVideo();
    },
    "PAUSE": function PAUSE() {
        player.pauseVideo();
    },
    "VOLUME": function VOLUME(volume) {
        console.log(volume);
        player.setVolume(volume);
    }
};
"use strict";

var Actions = {
    open: function open(videoId) {
        loadVideo(videoId);
    },
    play: function play() {
        player.playVideo();
    },
    pause: function pause() {
        player.pauseVideo();
    },
    volume: function volume(value) {
        player.setVolume(value);
    },
    next: function next() {},
    previous: function previous() {}
};
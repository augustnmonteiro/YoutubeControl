'use strict';

var tag = document.createElement('script'),
    firstScriptTag,
    player,
    done = false;

function loadIframeApi() {
    tag.src = "https://www.youtube.com/iframe_api";
    firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

loadIframeApi();

function onYouTubeIframeAPIReady() {
    player = new YT.Player('Player', {
        height: '200',
        width: '290',
        endSeconds: null,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    loadVideo("8S0FDjFBj8o");
}

function onPlayerReady(event) {
    event.target.playVideo();
}
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
    if (event.data == YT.PlayerState.ENDED) {
        videoEnd();
    }
}

function loadVideo(videoId) {
    player.loadVideoById({
        'videoId': videoId
    });
}
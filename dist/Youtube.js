"use strict";

var YoutubeAPI = {
    baseUrl: "https://www.googleapis.com/youtube/v3/",
    baseParam: {
        key: "AIzaSyBy4Hl33iqHbJe6nFTDh-f6cASBGjy4vL4",
        maxResults: 20,
        order: "viewCount",
        part: "snippet",
        pageToken: ""
    },
    response: {},
    lastquery: "",
    query: function query(params) {
        var query = "?";
        for (var item in params) {
            query += item + "=" + params[item] + "&";
        }
        for (var _item in this.baseParam) {
            query += _item + "=" + this.baseParam[_item] + "&";
        }
        return query.substr(0, query.length - 1);
    },
    request: function request(url, params, callback) {
        url = this.baseUrl + url + this.query(params);
        var query = url;
        if (url.split("?")[1]) {
            query += "&";
        } else {
            query += "?";
        }
        query += "callback=jsonp";

        var script = window.document.createElement("script");
        window.jsonp = function (data) {
            callback(data);
            delete window.jsonp;
            window.document.body.removeChild(script);
        };
        script.src = query;
        window.document.body.appendChild(script);
    },
    search: function search(q, callback) {
        this.request("search", { q: q }, function (data) {
            callback(data);
        });
        this.lastquery = q;
    }
};

var tag = document.createElement('script'),
    firstScriptTag,
    player,
    done = false;

function loadIframeApi() {
    tag.src = "https://www.youtube.com/iframe_api";
    firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

if (!isClient) {
    loadIframeApi();
}

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
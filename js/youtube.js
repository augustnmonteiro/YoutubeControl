var YOUTUBE_KEY = "AIzaSyCV8Aa5ZVrIxWN4iebpA02gII9-bSNLv3g";

var yt = {
  baseUrl: "https://www.googleapis.com/youtube/v3/",
  baseParam: {
    key: YOUTUBE_KEY,
    maxResults: 50,
    order: "viewCount",
    part: "snippet",
    pageToken: "",
    callback: "jsonp"
  },
  query: function query(params) {
    var query = "?";
    params = Object.assign(params, this.baseParam);

    Object.keys(params).forEach(function (param) {
      return query += param + "=" + params[param] + "&";
    });
    return query.substr(0, query.length - 1);
  },
  request: function request(url, params, callback) {
    var script = window.document.createElement("script");
    window.jsonp = function (data) {
      callback(data);
      delete window.jsonp;
      window.document.body.removeChild(script);
    };
    script.src = this.baseUrl + url + this.query(params);
    window.document.body.appendChild(script);
  },
  search: function search(q, callback) {
    this.request("search", {q: q}, function (data) {
      return callback(data);
    });
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

function onYouTubeIframeAPIReady() {
  player = new YT.Player('Player', {
    height: '200',
    width: '290',
    endSeconds: null,
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function loadVideo(videoId) {
  player.loadVideoById({
    'videoId': videoId
  });
}

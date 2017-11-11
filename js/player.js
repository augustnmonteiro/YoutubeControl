app.player = {

  youtubeFrameLoaded: false,

  showPlayer: function showPlayer() {
    if (!this.youtubeFrameLoaded) {
      hideAll();
      console.log("Show");
      document.getElementById("Player").classList.remove("hide");
      loadIframeApi();
      this.youtubeFrameLoaded = true;
    }
  },
  render: function render() {
    hideAll();
    document.getElementById("Config").classList.remove("hide");
  }

};
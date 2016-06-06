var Player = {

    html: `<div id="Config">
        <img id="QRCode" src="">
      </div>
      <div id="Player" class="hide"></div>
      <div id="Controls" class="hide">
      </div>`,

    render () {
        document.getElementById("Content").innerHTML = this.html;
    }
};
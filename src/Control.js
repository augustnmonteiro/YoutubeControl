var Control = {

    html: `<div id="MediaControls">
    <button onclick="conn.send({action: 'play'});">PLAY</button>
    <button onclick="conn.send({action: 'pause'});">PAUSE</button>
    <input id="Volume" oninput="conn.send({action: 'volume', data: this.value});" type="range" min="0" max="100"/>
    <input type="text" id="SearchInput" placeholder="Search" onkeydown="if (event.keyCode === 13) {Control.search();}"/>
    </div>
    <ul id="Videos">

    </ul>`,

    createMediaControls () {

    },

    createSearch () {

    },

    search () {
        var value = document.querySelector("#SearchInput").value;
        YoutubeAPI.search(value, this.renderVideosList);
        document.querySelector("#SearchInput").blur();
    },

    renderVideosList(list) {
        var ul = document.querySelector("#Videos");
        ul.innerHTML = "";
        list.items.forEach((item) => {
            let li = document.createElement("li");
            li.innerHTML = `<img class='thumb' src='${item.snippet.thumbnails.default.url}'>
                <h3>${item.snippet.title}</h3>`;
            li.onclick = () => conn.send({action: 'open', data: item.id.videoId});
            ul.appendChild(li);
        });
    },

    render () {
        document.getElementById("Content").innerHTML = this.html;
    }

};


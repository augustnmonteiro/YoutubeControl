var Control = {

    html: `<div id="MediaControls">
    <button onclick="conn.send({action: 'PLAY'});">PLAY</button>
    <button onclick="conn.send({action: 'PAUSE'});">PAUSE</button>
    <input id="Volume" oninput="conn.send({action: 'VOLUME', data: this.value});" type="range" min="0" max="100"/>
    <input type="text" id="SearchInput" placeholder="Search" onkeydown="if (event.keyCode === 13) {search();}"/>
    </div>
    <ul id="Videos">

    </ul>`,

    createMediaControls () {

    },

    createSearch () {

    },

    search () {
        var value = document.querySelector("#SearchInput").value;
        YoutubeAPI.search(value, (data) => {
            var ul = document.querySelector("#Videos");
            ul.innerHTML = "";
            data.items.forEach(function(item){
                let li = document.createElement("li");
                li.innerHTML = "<img class='thumb' src='"+item.snippet.thumbnails.default.url+"'>" +
                    "<h3>"+item.snippet.title+"</h3>";
                li.onclick = function () {
                    conn.send({action: 'OPENVIDEO', data: item.id.videoId});
                };
                ul.appendChild(li);
            });
        });
        document.querySelector("#SearchInput").blur();
    },

    renderVideosList() {

    },

    render () {
        document.getElementById("Content").innerHTML = this.html;
    }

};


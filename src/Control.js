var html = `<div id="MediaControls">
    <button onclick="conn.send({action: 'PLAY'});">PLAY</button>
    <button onclick="conn.send({action: 'PAUSE'});">PAUSE</button>
    <input id="Volume" oninput="conn.send({action: 'VOLUME', data: this.value});" type="range" min="0" max="100"/>
    <input type="text" id="SearchInput" placeholder="Search" onkeydown="if (event.keyCode === 13) {search();}"/>
    </div>
    <ul id="Videos">

    </ul>`;

var Control = {

    createMediaControls () {

    },

    createSearch () {

    },

    search () {

    },

    renderVideosList() {

    },

    render () {

    }

};


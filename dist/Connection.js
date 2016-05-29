"use strict";

var localId = null,
    isClient = false,
    remoteId = null;

{
    var id = window.location.search.substr(1),
        client = id.substr(id.length - 2);
    if (id && client === "cc") {
        isClient = true;
        localId = id;
        remoteId = id.substr(0, id.length - 2);
    }
}

window.onload = function () {
    if (isClient) {
        document.querySelector("#Config").className += "hide";
        document.querySelector("#Controls").className = "";
    }
};

var peer = new Peer(localId, {
    key: PEERJS_KEY,
    debug: 0
});

peer.on('open', function (id) {
    console.log('LocalID: ' + id);
    if (remoteId === null) {
        remoteId = id + "cc";
        document.querySelector("#QRCode").src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + location.href + "?" + remoteId;
    }
    openConnection();
});

function openConnection() {
    var conn = peer.connect(remoteId, {
        reliable: true
    });

    conn.on('open', function () {
        console.log("OPENED");

        conn.on('error', function (data) {
            console.log('Error', data);
        });

        conn.on('close', function (data) {
            console.log('Close', data);
        });
    });

    window.conn = conn;
}

peer.on('error', function (err) {
    console.log("ERROR", err);
});

peer.on('disconnected', function () {
    console.log("DISCONNECTED");
});

peer.on('close', function () {
    console.log("CLOSE");
});

peer.on('connection', function (conn) {
    console.log("CONNECTED");
    document.querySelector("#Config").className += "hide";
    document.querySelector("#Player").className = "";
    conn.on('data', function (data) {
        if (data.action && data.data && Actions[data.action]) {
            Actions[data.action](data.data);
        }
    });
});
var localId = null
    , isClient = false
    , remoteId = null;

var peer = new Peer(localId, {
  key: PEERJS_KEY,
  debug: 0
});

peer.on('open', function(id) {
    console.log('LocalID: ' + id);
    if (remoteId === null) {
        remoteId = id + "cc";
        qr.image({
            image: document.querySelector("#QRCode"),
            value: location.href + "?" + remoteId
        });
    }
    openConnection();
});

function openConnection() {
    var conn = peer.connect(remoteId, {
        reliable: true
    });

    window.conn = conn;
}

peer.on('connection', function(conn) {
    console.log("CONNECTED");
    conn.on('data', function(data) {
        if(data.action && Actions[data.action]) {
            Actions[data.action](data.data);
        }
    });
});

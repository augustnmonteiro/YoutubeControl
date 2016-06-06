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
        document.querySelector("#QRCode").src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + location.href + "?" + remoteId;
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

var isControl = window.location.search.substr(1);
var myId = isControl || null;

console.log(myId);

var peer = new Peer(myId, {
  key: PEERJS_KEY,
  debug: 0
});


peer.on('open', function(id) {
    myId = id;
    console.log('MyID: ' + id);
    if (!isControl) {
        qr.image({
            image: document.querySelector("#QRCode"),
            value: location.href + "?" + id + "cc",
            size: 10
        });
    }
    openConnection();
});

function openConnection() {
    let remoteId = null;
    if (isControl) {
        remoteId = myId.substr(0, myId.length - 2);
    } else {
        remoteId = myId + "cc";
    }
    console.log("REMOTEID", remoteId);
    var conn = peer.connect(remoteId, {
        reliable: true
    });

    window.conn = conn;
}

peer.on('connection', function(conn) {
    console.log("CONNECTED");
    if (!isControl) {
        Player.showPlayer();
    }
    conn.on('data', function(data) {
        if(data.action && Actions[data.action]) {
            Actions[data.action](data.data);
        }
    });
});

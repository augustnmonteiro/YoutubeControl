var isControl = false;

if (window.location.search !== "") {
    isControl = true;
}

if (isControl) {
    Control.render();
} else {
    Player.render();
}

function search(){
}
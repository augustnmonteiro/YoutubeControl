"use strict";

var Actions = {
    "OPENVIDEO": function OPENVIDEO(video) {
        console.log("VIDEO: ", video);
        document.querySelector("#YouTube").src = "https://www.youtube.com/embed/" + video;
    }
};
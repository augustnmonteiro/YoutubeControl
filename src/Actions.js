var Actions = {
    "OPENVIDEO": function (video) {
        console.log("VIDEO: ", video);
        document.querySelector("#YouTube").src = "https://www.youtube.com/embed/" + video;
    }
};

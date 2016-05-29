function search(){
    var value = document.querySelector("#SearchInput").value;
    YoutubeAPI.search(value, function (data) {
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
}
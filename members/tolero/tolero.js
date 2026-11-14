window.onscroll = function() {
    var percent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    document.getElementById("depth").innerHTML = "Depth: " + Math.round(percent * 200) + "m";

    if (Math.random() < 0.2) {
        var bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(bubble);

        setTimeout(function() {
            bubble.remove();
        }, 3000);
    }
}

function playGame(id, url) {
    document.getElementById(id).innerHTML = '<iframe src="' + url + '"></iframe>';
}

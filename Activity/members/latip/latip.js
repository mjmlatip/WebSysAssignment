// depth meter
window.onscroll = function() {
    var percent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    document.getElementById("depth").innerHTML = "Depth: " + Math.round(percent * 200) + "m";

    // sometimes make a bubble
    if (Math.random() < 0.2) {
        var bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(bubble);

        // delete it after it floated up
        setTimeout(function() {
            bubble.remove();
        }, 3000);
    }
}

// only load the game when you click it so the page doesnt lag
function playGame(id, url) {
    document.getElementById(id).innerHTML = '<iframe src="' + url + '"></iframe>';
}

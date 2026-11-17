function postTweet() {
    var input = document.getElementById("tweetText");
    var text = input.value;

    if (text == "") {
        return;
    }

    var tweet = document.createElement("article");
    tweet.className = "tweet";
    tweet.innerHTML = '<img class="avatar" src="images/MJ.jpg" alt="">' +
        '<div class="tweet-body">' +
        '<p class="tweet-head"><b>You</b> <span class="gray">@you · now</span></p>' +
        '<p class="tweet-text"></p>' +
        '<div class="actions">' +
        '<span><i class="bi bi-chat"></i> <b></b></span>' +
        '<span onclick="retweet(this)"><i class="bi bi-repeat"></i> <b></b></span>' +
        '<span onclick="like(this)"><i class="bi bi-heart"></i> <b></b></span>' +
        '<span><i class="bi bi-upload"></i></span>' +
        '</div>' +
        '</div>';

    tweet.getElementsByClassName("tweet-text")[0].textContent = text;

    var tweets = document.getElementById("tweets");
    tweets.insertBefore(tweet, tweets.firstChild);

    input.value = "";
}

document.getElementById("tweetText").onkeydown = function (event) {
    if (event.key == "Enter") {
        postTweet();
    }
};

function like(button) {
    var icon = button.getElementsByTagName("i")[0];
    var count = button.getElementsByTagName("b")[0];
    var number = Number(count.textContent);

    if (button.className == "liked") {
        button.className = "";
        icon.className = "bi bi-heart";
        number = number - 1;
    } else {
        button.className = "liked";
        icon.className = "bi bi-heart-fill";
        number = number + 1;
    }

    if (number == 0) {
        count.textContent = "";
    } else {
        count.textContent = number;
    }
}

function retweet(button) {
    var count = button.getElementsByTagName("b")[0];
    var number = Number(count.textContent);

    if (button.style.color == "") {
        button.style.color = "#00ba7c";
        number = number + 1;
    } else {
        button.style.color = "";
        number = number - 1;
    }

    if (number == 0) {
        count.textContent = "";
    } else {
        count.textContent = number;
    }
}

var roleNumber = 0;
var letterNumber = 0;
var deleting = false;
var roles = ["larper", "student", "game developer", "future millionaire", "retired dancer", "retired heartbreaker"];


function type() {
    var word = roles[roleNumber];
    var typing = document.getElementById("typing");
    var wait = 100;

    if (deleting == false) {
        letterNumber = letterNumber + 1;
        if (letterNumber == word.length) {
            deleting = true;
            wait = 1500;
        }
    } else {
        letterNumber = letterNumber - 1;
        wait = 50;
        if (letterNumber == 0) {
            deleting = false;
            roleNumber = roleNumber + 1;
            if (roleNumber == roles.length) {
                roleNumber = 0;
            }
            wait = 400;
        }
    }

    typing.textContent = word.substring(0, letterNumber);
    setTimeout(type, wait);
}

type();

function toggleTheme() {
    var button = document.getElementById("themeButton");

    if (document.body.className == "dark") {
        document.body.className = "";
        button.innerHTML = '<i class="bi bi-moon-fill"></i>';
        localStorage.setItem("theme", "light");
    } else {
        document.body.className = "dark";
        button.innerHTML = '<i class="bi bi-sun-fill"></i>';
        localStorage.setItem("theme", "dark");
    }
}

if (localStorage.getItem("theme") == "dark") {
    toggleTheme();
}

function toggleMenu() {
    var links = document.getElementById("links");

    if (links.className == "links") {
        links.className = "links open";
    } else {
        links.className = "links";
    }
}

var navLinks = document.getElementById("links").getElementsByTagName("a");

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function () {
        document.getElementById("links").className = "links";
    };
}

function goTop() {
    window.scrollTo(0, 0);
}

window.onscroll = function () {
    var topbar = document.getElementById("topbar");
    var toTop = document.getElementById("toTop");

    if (window.scrollY > 20) {
        topbar.className = "topbar scrolled";
    } else {
        topbar.className = "topbar";
    }

    if (window.scrollY > 500) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }

    var sections = ["about", "skills", "projects", "contact"];
    var current = "";

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (window.scrollY >= section.offsetTop - 120) {
            current = sections[i];
        }
    }

    for (var j = 0; j < navLinks.length; j++) {
        if (navLinks[j].getAttribute("href") == "#" + current) {
            navLinks[j].className = "active";
        } else {
            navLinks[j].className = "";
        }
    }

    var fills = document.getElementsByClassName("fill");
    var skillsTop = document.getElementById("skills").getBoundingClientRect().top;

    if (skillsTop < window.innerHeight - 100) {
        for (var k = 0; k < fills.length; k++) {
            fills[k].style.width = fills[k].getAttribute("data-level") + "%";
        }
    }
};

function filterProjects(type, button) {
    var projects = document.getElementsByClassName("project");
    var buttons = document.getElementsByClassName("filter");
    var shown = 0;

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].className = "filter";
    }
    button.className = "filter active";

    for (var j = 0; j < projects.length; j++) {
        if (type == "all" || projects[j].getAttribute("data-type") == type) {
            projects[j].style.display = "block";
            shown = shown + 1;
        } else {
            projects[j].style.display = "none";
        }
    }

    if (shown == 0) {
        document.getElementById("noProjects").style.display = "block";
    } else {
        document.getElementById("noProjects").style.display = "none";
    }
}

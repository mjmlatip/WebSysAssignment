function contact() {
    document.getElementById("contactMessage").textContent = "Thanks! Your message is ready to be sent.";
    document.getElementById("contactForm").reset();
}

function login() {
    var username = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (username == "student" && password == "123") {
        alert("Login successful!");
    } else {
        alert("Wrong username or password.");
    }
}

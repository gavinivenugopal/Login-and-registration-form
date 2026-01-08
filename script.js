function register() {
    let username = document.getElementById("regUsername").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value.trim();

    // Empty field check
    if (username === "" || email === "" || password === "") {
        showMessage("All fields are required");
        return;
    }

    // ✅ Correct password regex
    let passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

    // Password validation
    if (!passwordPattern.test(password)) {
        showMessage(
            "Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character"
        );
        return;
    }

    let user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    showMessage("Registration successful!", "green");
}

function login() {
    let loginEmail = document.getElementById("loginEmail").value.trim();
    let loginPassword = document.getElementById("loginPassword").value.trim();

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        showMessage("Please register first");
        return;
    }

    if (
        loginEmail === storedUser.email &&
        loginPassword === storedUser.password
    ) {
        showMessage("Login successful!", "green");
    } else {
        showMessage("Invalid email or password");
    }
}

function showMessage(text, color = "red") {
    let message = document.getElementById("message");
    message.innerText = text;
    message.style.color = color;
}


function login() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        showMessage("No user found. Please register.");
        return;
    }

    if (loginEmail === storedUser.email && loginPassword === storedUser.password) {
        showMessage("Login successful!", "green");
    } else {
        showMessage("Invalid email or password");
    }
}

function showMessage(text, color = "red") {
    let message = document.getElementById("message");
    message.textContent = text;
    message.style.color = color;
}

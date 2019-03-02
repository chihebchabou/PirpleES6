const formS = document.getElementById("formS");
const formL = document.getElementById("formL");

let currentUser;

container.addEventListener("click", (e) => {
    if (e.target.nodeName === "INPUT" && e.target.style.boxShadow === "red 0px 0px 5px") {
        e.target.style.boxShadow = "none";
        e.target.parentNode.removeChild(e.target.parentNode.querySelector("span"));
        formS.querySelector("button").disabled = false;
        formL.querySelector("button").disabled = false;
    }
})

index.addEventListener("click", (e) => {
    const classSignUp = signUpForm.className.split(" ");
    const classLogIn = logInForm.className.split(" ");
    if (e.target.id === "signUpBtn") {
        signUpForm.classList.remove("displayNone");
        if (classLogIn.indexOf("displayNone") === -1) {
            logInForm.classList.add("displayNone");
        }
    }
    if (e.target.id === "logInBtn") {
        logInForm.classList.remove("displayNone");
        if (classSignUp.indexOf("displayNone") === -1) {
            signUpForm.classList.add("displayNone");
        }
    }

    
});

formS.addEventListener("submit", (e) => {
    e.preventDefault();
    const signedUpUser = validateSignUpForm();
    if (signedUpUser) {
        if (JSON.parse(localStorage.getItem("users")) === null) {
            const users = [];
            users.push(signedUpUser);
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            const users = JSON.parse(localStorage.getItem("users"));
            for (const user of users) {
                if(user.email === signedUpUser.email) {
                    errorMessage("This email already exists, please try another one", document.getElementById("userEmail"));
                    return;
                }
            }
            users.push(signedUpUser);
            localStorage.setItem("users", JSON.stringify(users));
        }
        signUpForm.classList.add("displayNone");
        userDashboard(signedUpUser);
        formS.reset();
    }
});

formL.addEventListener("submit", (e) => {
    e.preventDefault();
    let authenticatedUser = validateLogInForm();
    if (authenticatedUser) {
        const users = JSON.parse(localStorage.getItem("users"));
        if (users && users.length > 0) {
            for (const user of users) {
                if (user.email === authenticatedUser.userEmail && user.password === authenticatedUser.userPassword) {
                    console.log("logged in");
                    if (authenticatedUser.rememberMe === "on") {
                        localStorage.setItem("connected", JSON.stringify(user));
                    }
                    successMessage("successfuly logged in");
                    logInForm.classList.add("displayNone");
                    userDashboard(user);
                    formL.reset();
                    return;
                } else if (user.email === authenticatedUser.userEmail && user.password !== authenticatedUser.userPassword) {
                    failureMessage("verify your password " + user.email);
                    return;
                }
            }
            failureMessage("this user doesn't exist");
        } else {
            failureMessage("There are no users, please Sign up to start");
        }
    }
});

function keepMeConnected() {
    const connected = JSON.parse(localStorage.getItem("connected"));
    if (connected) {
        userDashboard(connected);
    } else {
        return;
    }
}

function successMessage(message) {
    const successMsg = document.createElement("div");
    successMsg.classList.add("successMessage");
    successMsg.innerText = message;
    container.insertBefore(successMsg, index);
    setTimeout(() => container.removeChild(successMsg), 2000);
}

function failureMessage(message) {
    const failureMsg = document.createElement("div");
    failureMsg.classList.add("failureMessage");
    failureMsg.innerText = message;
    container.appendChild(failureMsg);
    setTimeout(() => container.removeChild(failureMsg), 2000);
}

function idGenerator(date) {
    return Date.parse(date);
}
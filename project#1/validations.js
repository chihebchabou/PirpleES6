function validateSignUpForm() {
    if (document.getElementById("userFirstName").value === "") {
        errorMessage("First Name is required", document.getElementById("userFirstName"));
        return;
    }
    else
    if (document.getElementById("userLastName").value === "") {
        errorMessage("Last Name is required", document.getElementById("userLastName"));
        return;
    }
    else
    if (document.getElementById("userEmail").value === "") {
        errorMessage("Email is required", document.getElementById("userEmail"));
        return;
    }
    else
    if (!validateEmail(document.getElementById("userEmail").value)) {
        errorMessage("Please enter a valid email ex:'user@example.com'", document.getElementById("userEmail"));
        return;
    }
    else
    if (document.getElementById("userPassword").value === "") {
        errorMessage("Password is required", document.getElementById("userPassword"));
        return;
    }

    if (document.getElementById("userConfirmPassword").value === "") {
        errorMessage("Confirm Password is required", document.getElementById("userConfirmPassword"));
        return;
    }
    else
    if (document.getElementById("userPassword").value !== (document.getElementById("userConfirmPassword").value)) {
        errorMessage("Password and Confirm password don't match", document.getElementById("userConfirmPassword"));
        return;
    }
    else
    if (!document.getElementById("termUse").checked) {
        errorMessage("Terms of use agreement is required", document.getElementById("termUse"));
        return;
    }
    else {
        return {
            firstName: document.getElementById("userFirstName").value.toLowerCase(),
            lastName : document.getElementById("userLastName").value.toLowerCase(),
            email: document.getElementById("userEmail").value,
            password: md5(document.getElementById("userPassword").value),
            termUse: document.getElementById("termUse").value,
        };
    }
}

function validateLogInForm() {
    if (document.getElementById("userLoginEmail").value === "") {
        errorMessage("Email is required", document.getElementById("userLoginEmail"));
    }
    else
    if (!validateEmail(document.getElementById("userLoginEmail").value)) {
        errorMessage("Please enter a valid email ex:'user@example.com'", document.getElementById("userLoginEmail"));
        return;
    }
    else
    if (document.getElementById("userLoginPassword").value === "") {
        errorMessage("Password is required", document.getElementById("userLoginPassword"));
    }
    else {
        return {
            userEmail: document.getElementById("userLoginEmail").value,
            userPassword: md5(document.getElementById("userLoginPassword").value),
            rememberMe: document.getElementById("userRememberMe").checked ? "on" : "off"
        };
    }
}

function validateEmail(email){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email); 
  } 

function errorMessage(message, input) {
    const span = document.createElement("span");
    span.style.color = "red";
    span.innerText = message
    input.parentNode.parentNode.querySelector("button").disabled = true;
    input.style.boxShadow = "0 0 5px red";
    input.parentNode.appendChild(span);
}
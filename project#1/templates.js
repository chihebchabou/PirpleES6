/*
 * Homework Assignment #9: Template Literals
*/
const container = document.createElement("div");
container.id = "container";

const h1 = document.createElement("h1");
h1.innerText = "To-Do list";

const p = document.createElement("p");
p.innerText = "Get your stuff done";

const index = document.createElement("div");
index.id = "index";

const indexBtns = {
    signUpBtn: "Sign Up",
    logInBtn: "Log In"
}

index.innerHTML = `<button id="${Object.keys(indexBtns)[0]}">${indexBtns["signUpBtn"]}</button>
<button id="${Object.keys(indexBtns)[1]}">${indexBtns["logInBtn"]}</button>`;

const welcome = document.createElement("div");
welcome.id = "welcome";
welcome.classList.add("displayNone");

const welcomeBtns = {
    newTODOBtn: "Create new TODO",
    logOutBtn: "Log Out",
    deleteBtn: "Delete user"
};

welcome.innerHTML = `<button id="${Object.keys(welcomeBtns)[0]}">${welcomeBtns["newTODOBtn"]}</button>
<button id="${Object.keys(welcomeBtns)[1]}">${welcomeBtns["logOutBtn"]}</button>
<button id="${Object.keys(welcomeBtns)[2]}">${welcomeBtns["deleteBtn"]}</button>`;

const hr = document.createElement("hr");

const signUpForm = document.createElement("div");
signUpForm.id = "signUpForm";
signUpForm.classList.add("displayNone");

const signUpFormInputs = [
    {userFirstName: "First Name", type: "text"},
    {userLastName: "Last Name", type: "text"},
    {userEmail: "Email", type: "text"},
    {userPassword: "Password", type: "password"},
    {userConfirmPassword: "Confirm Password", type: "password"},
];

const sH2 = "Sign Up";
signUpForm.innerHTML = (
    `
    <h2>${sH2}</h2>
    <form id="formS" action="">
    ${signUpFormInputs.map((element) => 
        `
        <p>
          <label for="${Object.keys(element)[0]}">${element[Object.keys(element)[0]]}</label>
          <input type="${element["type"]}" name="${Object.keys(element)[0]}" id="${Object.keys(element)[0]}">
        </p>
        `
        ).join("\n")}
        <p>
          <label for="termUse">I agree to the Terms of Use</label>
          <input type="checkbox" name="termUse" id="termUse" value="agree">
        </p>
        <button type="submit">Sign Up</button>
    </form>
    `
);

const logInForm = document.createElement("div");
logInForm.id = "logInForm";
logInForm.classList.add("displayNone");

const logInFormInputs = [
    {userLoginEmail: "Email", type: "text"},
    {userLoginPassword: "Password", type: "password"},
    {userRememberMe: "Remember me", type: "checkbox"},
];

const lH2 = "Log In";
logInForm.innerHTML = (
    `
    <h2>${lH2}</h2>
    <form id="formL" action="">
    ${logInFormInputs.map((element) => 
        `
        <p>
          <label for="${Object.keys(element)[0]}">${element[Object.keys(element)[0]]}</label>
          <input type="${element["type"]}" name="${Object.keys(element)[0]}" id="${Object.keys(element)[0]}">
        </p>
        `
        ).join("\n")}
        <button type="submit">Log In</button>
    </form>
    `
);

const myDashboard = document.createElement("div");
myDashboard.id = "myDashboard";
myDashboard.classList.add("displatNone");

const edit = document.createElement("div");
edit.id = "edit";
edit.classList.add("displayNone");

container.appendChild(h1);
container.appendChild(p);
container.appendChild(index);
container.appendChild(welcome);
container.appendChild(hr);
container.appendChild(signUpForm);
container.appendChild(logInForm);
container.appendChild(myDashboard);
container.appendChild(edit);

const body = document.getElementsByTagName("body");
body[0].appendChild(container);


const meta1 = {charset: "UTF-8"};
const meta2 = {name: "viewport", content:"width=device-width, initial-scale=1.0"};
const meta3 = {"http-equiv": "X-UA-Compatible", content:"ie=edge"};

const title = "homework9"

const link = {rel: "stylesheet", href: "./style.css"}

const head = document.getElementsByTagName("head");


console.log(document);

head[0].innerHTML = (
    `${head[0].innerHTML}
    <meta name="${meta2["name"]}" content="${meta2["content"]}">
    <meta http-equiv="${meta3["http-equiv"]}" content="${meta3["content"]}">
    <title>${title}</title>
    <link rel="${link["rel"]}" href="${link["href"]}">
    `
);
console.log(head[0].innerHTML);
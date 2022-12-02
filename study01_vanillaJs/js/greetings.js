const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

/*const link = document.querySelector("a");
function handleLinkClick(event) {
    event.preventDefault();
    alert("click");
    console.log(event);
}*/

function onLoginSubmit(event) {
    event.preventDefault();
    //console.log(event);
    //console.log(loginInput.value);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    
    localStorage.setItem(USERNAME_KEY,username);
    //console.log(USERNAME_KEY);

    //greeting.innerText = "Hello " + USERNAME_KEY;
    //greeting.innerText = `Hello ${username}`;
    //greeting.classList.remove(HIDDEN_CLASSNAME);

    paintGreetings(username);
}

//link.addEventListener("click", handleLinkClick);

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}


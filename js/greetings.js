const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //화면 새로고침 방지함
    loginForm.classList.add(HIDDEN_CLASSNAME); //form 숨긴 후
    const username = loginInput.value; //value를 username이라는 key 값으로 저장
    localStorage.setItem(USERNAME_KEY, username); //username을 localStorage에 저장
    paintGreetings(username); //user 정보는 input에서 옴
}


function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); //form의 hidden class 삭제
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername); //user 정보는 localStorage에서 옴
}





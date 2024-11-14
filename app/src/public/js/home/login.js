"use strict"


const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        password : password.value 
    };

    //fetch 요청   보내는부분 좀더 공부 필요
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
      .then((res) => console.log(res)); //.then(console.log)
}
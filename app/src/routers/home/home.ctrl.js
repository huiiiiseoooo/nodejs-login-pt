"use strict"

const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res)=>{
        res.send("여기는 루트입니다");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res)=>{
        const id = req.body.id;
        const password = req.body.password;
        const users = UserStorage.getUsers("id", "password");
        //js 문법method .includes(검색 단어, [postion])...포함하고있으면 true 아니면 false

        const response = {}

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id) //js 문법 메서드 indexOf(찾는값)  그 값이 시작되는 지점 인덱스 리턴
            if(users.password[idx] === password){
                    response.success = true;
                    return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하셨습니다";
        return res.json(response);
 
    },
};


module.exports = {
    output,
    process
};

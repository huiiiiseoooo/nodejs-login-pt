"use strict"

const UserStorage = require("./UserStorage");

class User{
    constructor(body) {
        this.body = body;
    }

    login() {
        const {id, password} = UserStorage.getUserInfo(this.body.id);
        if(id){
            if(id===this.body.id && password===this.body.password){
                return {success : true};
            }
            return {success: false, msg: "비밀번호 오류"};
        }
        return {success: false, msg: "아이디 존재x"};
        
    }
}

module.exports = User;  
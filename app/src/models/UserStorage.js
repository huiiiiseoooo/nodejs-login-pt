"use strict"

class UserStorage{
    static #users = {
        id : ["신팀장", "신부장", "신차장"],
        password : ["1234", "5678", "qwer"],
        name : ["나", "너", "우리"]
    };

    static getUsers(...fields){
        const users = this.#users;
        
    }
}

module.exports = UserStorage;
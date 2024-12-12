"use strict"

// const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

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
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};


module.exports = {
    output,
    process
};

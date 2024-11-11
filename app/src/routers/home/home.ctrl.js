"use strict"



const home = (req, res)=>{
    res.send("여기는 루트입니다");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login
};

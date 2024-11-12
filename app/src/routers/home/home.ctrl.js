"use strict"

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
        console.log(req.body);
    },
};


module.exports = {
    output,
    process
};

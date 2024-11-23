"use strict"

const users = {
    id : ["신팀장", "신부장", "신차장"],
    password : ["1234", "5678", "qwer"],
};

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
        //js 문법method .includes(검색 단어, [postion])...포함하고있으면 true 아니면 false
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id) //js 문법 메서드 indexOf(찾는값)  그 값이 시작되는 지점 인덱스 리턴
            if(users.password[idx] === password){
                return res.json({
                    success : true,
                });
            }

            return res.json({
                success: false,
                msg: "로그인에 실패"
            });
        }
 
    },
};


module.exports = {
    output,
    process
};

const express = require('express');
const app = express();
const bodyParser = require("body-parser"); //바디파서 불러오기

//라우팅 불러오기
const home = require("./src/routers/home"); //라우팅 미들웨어 경로 불러오기

//앱 세팅
app.set('views','./src/views');
app.set("view engine", "ejs");



app.use(express.static(`${__dirname}/src/public`));  //?
app.use(bodyParser.json()); //바디파서 미들웨어 구문
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));
app.use("/",home); //use-> 미들웨어 등록 메서드


module.exports = app;
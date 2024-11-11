const express = require('express');
const app = express();

//라우팅 불러오기
const home = require("./routers/home");

//앱 세팅
app.set('views','./views');
app.set("view engine", "ejs");


app.use("/",home); //use-> 미들웨어 등록 메서드


module.exports = app;

package.json

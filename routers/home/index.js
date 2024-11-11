"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
//로그인 뷰 분리
router.get("/login", ctrl.login); //ctrl.login은 함수 참조이다 명령어 당시에 전달받는게 아닌 함수프로그램 실행시 전달받느 구조


module.exports = router;
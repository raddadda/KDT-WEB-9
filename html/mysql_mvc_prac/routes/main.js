const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
//회원가입
router.get('/signup',controller.signup);
router.post('/signup',controller.post_signup);
//로그인
router.get('/login',controller.login);
router.post('/login',controller.post_login);
//회원정보수정 기능
router.post('/profile',controller.post_profile);
//회원정보조회 get

//회원정보수정 patch
module.exports = router;

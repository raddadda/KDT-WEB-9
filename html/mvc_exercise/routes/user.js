const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/',controller.index);

router.get('/signup',controller.getSignup);

router.post('/signup',controller.postSignup);

router.get('/signin',controller.getSignin);

router.post('/signin',controller.postSignin);

module.exports=router;
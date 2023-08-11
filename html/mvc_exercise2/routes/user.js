const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/',controller.index);

router.get('/signup',controller.getSignup);

router.post('/signup',controller.postSignup);

router.get('/signin',controller.getSignin);

router.post('/signin',controller.postSignin);

router.post('/profile',controller.postProfile)

router.post('/profile/modify',controller.postProfile_modify)

router.post('/profile/delete',controller.postProfile_delete)


router.get('/findall',controller.findall);
module.exports=router;
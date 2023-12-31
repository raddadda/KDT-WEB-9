// const express = require('express');
// const controller = require('../controller/Cuser');
import express from 'express';
import * as controller from '../controller/Cuser.js';
const router = express.Router();

router.get('/', controller.index);
router.get('/loginmain', controller.index_login);
//GET localhost:8000/user/signup
router.get('/signup', controller.signup);
//POST localhost:8000/user/signup
router.post('/signup', controller.post_signup);
router.get('/signin', controller.signin);
router.post('/signin', controller.post_signin);
router.post('/profile', controller.post_profile);
router.patch('/profile/edit', controller.edit_profile);
router.delete('/profile/delete', controller.delete_profile);
router.get('/destroy', controller.destroysession);
export default router;
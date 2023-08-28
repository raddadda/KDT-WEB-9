const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/',controller.main);

router.post('/register', controller.register)

//router.get('/member',controller.member);
module.exports = router;

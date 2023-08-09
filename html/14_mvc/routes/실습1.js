const express = require('express');
const router = express.Router();
const controller = require('../controller/실습_contoller');


router.get('/',controller.main);
router.get('axiosPost',controller.axiosPost);
router.post('/axios',controller.comment);

module.exports = router;
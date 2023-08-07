const express = require('express');
const router = express.Router();
const controller = require("../controller/CComment");



//use사용해도된다. 이때는 도메인주소가 같으면 하나만 실행됨.
router.get('/',controller.main);
router.get('/comments',controller.comments);
router.get('/comment/:id',controller.comment);

module.exports = router;

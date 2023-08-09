//const express = require('express');
import express from 'express';
const controller = require('../controller/Cvisitor');
const router = express.Router();


router.get('/',controller.main);

router.get('/visitor',controller.getVisitors);

module.exports=router;
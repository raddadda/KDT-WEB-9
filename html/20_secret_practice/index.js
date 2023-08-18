//const express = require('express');
import express from 'express';
const app = express();
const PORT = 8000;
import db from './models';
//const db = require('./models');

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
// const userRouter = require('./routes/user');
import userRouter from './routes/user.js';
app.use('/', userRouter);

//404
app.use('*', (req, res) => {
    res.render('404');
});

//server open
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});

//const express = require('express');

import express from 'express';
import session from "express-session";

const app = express();
const PORT = 8000;

// //cookie
app.use(
    session({
    secret: 'mySessionSecret',
    resave: false,
    saveUninitialized: false,
    // name= '' 으로 세션의 이름을 지정할 수 있다.
    cookie: {
        httpOnly : true,
        maxAge: 60*1000,
    },
}));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
//const userRouter = require('./routes/user');
import userRouter from './routes/user.js';
app.use('/user', userRouter);





//404
app.use('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
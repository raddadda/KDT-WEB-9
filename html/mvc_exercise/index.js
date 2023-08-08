const express = require('express');
const app = express();
const PORT = 8000;
const mysql = require('mysql');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const userRouter = require('./routes/user')
app.use('/user',userRouter);

const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'newuser',
    password:'2230',
    database:'kdt9',
    port:3306,
});
conn.connect((err) =>{
    if(err){
        console.log('error');
        return;
    }
    console.log('connect');
});


//home
app.get('/user',(req,res)=>{
    res.render('index');
});
//signup
// app.get('/user/signup',(req,res)=>{
//     res.render('signup');
// });

app.get('*',(req,res) => {
    res.render('404');
});

app.listen(PORT);
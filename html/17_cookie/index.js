const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');

//일반 쿠키
app.use(cookieParser());

//cookie 옵션 객체
const cookieConfig = {

    httpOnly : true,
    maxAge : 60*1000, //1분
    // signed : true,

};

app.get('/', (req,res)=>{
    res.cookie('myCookie','myValue',cookieConfig);
    res.render('실습');
});

app.post('/', (req,res)=>{
    res.send(req.signedCookies.myCookie);
    console.log(req.signedCookies.myCookie);
    // if(result=){
     
    // }else{
        
    // }
    // res.clearCookie('myCookie','myValue',cookieConfig)
})
app.listen(PORT);
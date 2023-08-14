const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

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
   
    if(req.cookies.myCookie != null){
        result = true;
        console.log("cookie!!");
        res.render('실습',{b:true});
    }else{
        res.render('실습',{b:false});
    }
   
});
// app.get('/axios', (req,res)=> {
//     console.log('back',req.query);
//     res.send(req.query);
// })
// app.post('/axios', (req,res)=> {
//     console.log('back',req.body);
//     res.send(req.body); 
// })
app.post('/cookie', (req,res)=>{
    let a = req.body.cookie;
    console.log('back',req.body.cookie);
  
    let result;

    if(req.body.cookie){
        res.cookie('myCookie','myValue',cookieConfig);
        result = true;
    }

    console.log("cookie",req.cookies.myCookie);
  
   // res.clearCookie('myCookie','myValue',cookieConfig)
   
    res.send(result);
})


app.listen(PORT);
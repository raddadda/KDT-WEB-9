const express = require('express');
const app = express();
const PORT= 8000;
const jwt = require('jsonwebtoken');
const secret = 'secret key';

const userInfo = {id:"123", pw:"123", name:"123"};
app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/', (req,res)=>{
    
    res.render('index');
    // console.log(arr);
   
})
app.get('/token',(req,res)=>{
    if(req.headers.authorization){
        console.log("index res",req.headers.authorization);
        const arr = req.headers.authorization.split(' ');
        console.log(arr[1]);
        const token = arr[1];
        res.send({token});
    }
})

app.get('/login',(req,res)=>{
    res.render('login');
})
app.post('/login',(req,res)=>{
    console.log("req.body",req.body.id);
    console.log("userInfo.id",userInfo.id);

    if(userInfo.id === req.body.id && userInfo.pw === req.body.pw){
        console.log('입력한값과 회원정보가 일치합니다.');
        
        console.log(jwt.sign(req.body.id,secret));
        const token = jwt.sign(req.body.id,secret);
        
        res.send({result : true , token});
    }else{
        console.log('입력한값과 회원정보가 불일치합니다.');
    }

})

app.listen(PORT);
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const secret = 'secretKey';
const userInfo = { id: '1234', pw: '1234', name: '최영찬'};

app.get('/', (req, res) => {
    res.render('index');
});
 
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/token', (req, res) => {
    if(req.headers.authorization){
        console.log("mmmmmm");
        const token = req.headers.authorization.split(' ');
        try{
            const result = jwt.verify(token[1],secret);
            console.log("result",result);
            if(result === userInfo.id){
                console.log("같다");
                res.json({result: true, name:userInfo.name});
            }
            console.log("result.id",result.id);
            console.log("userInfo.id",userInfo.id);
        }catch(error){
           console.log(error);
           res.json({result:false, message: '인증된 회원이 아닙니다.'}) 
        }
    }else{
        res.render('/login');
    }
});
app.post('/login', (req, res) => {
    
    console.log("req.body",req.body);
    if(req.body.id === userInfo.id && req.body.pw === userInfo.pw){
        console.log('로그인성공');
        const token = jwt.sign(req.body.id,secret);
        console.log('token',token);
        res.send({result: true, token});
    }else{
        console.log('로그인실패');
    }
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
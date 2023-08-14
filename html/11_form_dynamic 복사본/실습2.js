const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//view engine
app.set('view engine','ejs');
app.set('views','./views');

let id1 = 'chan';
let pw1 = 'dkagh1';

//router
app.get('/',(req,res)=>{
    res.render('실습2');
});

//로그인 여부 true 성공 / false 실패
let t = true;

app.post('/axios', (req,res)=> {
    console.log('back',req.body);
    
    if(req.body.id == id1 && req.body.password == pw1){
        t = true;
        res.send(true);
    }else{
        t = false;
        res.send(true);
    }

})

//server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});
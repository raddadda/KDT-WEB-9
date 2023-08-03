const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//view engine
app.set('view engine','ejs')
app.set('views','./views')

//main
app.get('/', (req,res)=> {
    res.render('index');
})
//login form
let id1 = '123';
let pw1 = '1234';
app.get('/loginform', (req,res)=>{
    res.render('loginform');
})
app.post('/loginpost', (req,res)=>{
    console.log('back',req.body);
    if(req.body.id == id1 && req.body.password == pw1){
        console.log('성공');
        res.send(true);
    }else{
        console.log('실패');
        res.send(false);
    }
    
})

//server
app.listen(PORT,()=>{
    console.log(`http://localhost${PORT}`);
});

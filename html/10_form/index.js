const express = require('express');
const { userInfo } = require('os');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true}));  
app.use(express.json());
//view engine
app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=> {
    res.render('index',{
        title: 'main'
    });
})
app.get('/getForm',(req,res)=> {
    console.log(req.query);
    res.render('result', {
        title: "GET요청 폼 결과 확인하기",
        userInfo: req.query
    })
})
app.post('/postForm', (req,res) => {
    console.log(req.body);
    res.render('result', {
        title : 'POST요청 폼 결과 확인하기',
        userInfo: req.body
    })
})

//router
app.post('/',(req,res) => {
    //post로 요청하는건 모두 body
    console.log(req.body)
    res.send('hello');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

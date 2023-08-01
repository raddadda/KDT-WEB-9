const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true}));  
app.use(express.json());

//view engine
app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render('실습1',{
    });
})
app.get('/getForm',(req,res)=>{
    res.render('실습1result',{
        userInfo : req.query
    });
})
app.post('/postForm', (req,res) => {
    console.log(req.body);
    res.render('실습1result2', {
        userInfo: req.body
    })
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

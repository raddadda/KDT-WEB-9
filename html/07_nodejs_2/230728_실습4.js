const express = require('express');
const app = express();
const PORT = 8001;

app.set('view engine','ejs');
app.set('views','./views');

app.use('/public', express.static('./public'));

app.get('/',(req,res)=>{
    res.render('230728_실습4'
    ,{link1: "230728_실습4-1"}
    );
});
app.get('/kdt2',(req,res)=>{
    res.render('230728_실습4-1'
    // ,{link2: "230728_실습4-1" }
    );
});
app.get('/kdt3',(req,res)=>{
    res.render('230728_실습4-2'
    // ,{link3: "230728_실습4-1"}
    );
});



app.listen(PORT , () => {
    console.log(`http://localhost:${PORT}`);
});



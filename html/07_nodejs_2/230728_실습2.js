const express = require('express');
const app = express();
const PORT = 8001;

app.set('view engine','ejs');
app.set('views','./views');

app.use('/public', express.static('./public'));

app.get('/',(req,res)=>{
    res.render('230728_실습2',
    {fruit: [
        {name:'apple',kor:'사과'},
        {name:'banana',kor:'바나나'},
       {name:'grape',kor:'포도'},
        {name:'peache',kor:'복숭아'}]});
});

app.listen(PORT , () => {
    console.log(`http://localhost:${PORT}`);
});








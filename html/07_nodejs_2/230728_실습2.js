const express = require('express');
const app = express();
const PORT = 8001;

app.set('view engine','ejs');
app.set('views','./views');

app.use('/public', express.static('./public'));

app.get('/',(req,res)=>{
    res.render('230728_실습2');
});

app.listen(PORT , () => {
    console.log(`http://localhost:${PORT}`);
});








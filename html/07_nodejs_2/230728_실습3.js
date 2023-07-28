const express = require('express');
const app = express();
const PORT = 8001;

app.set('view engine','ejs');
app.set('views','./views');

app.use('/public', express.static('./public'));

app.get('/',(req,res)=>{
    res.render('230728_실습3'
    ,{data:[2,3,4,5,6,7,8,9] }
    );
});

app.listen(PORT , () => {
    console.log(`http://localhost:${PORT}`);
});





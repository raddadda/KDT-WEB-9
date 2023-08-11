const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models/index.js');


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const userRouter = require('./routes/user.js')
app.use('/user',userRouter);

app.get('*',(req,res) => {
    res.render('404');
});

db.sequelize.sync({force:false}).then(()=>{
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
})


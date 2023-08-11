const express =require('express');
const app = express();
const PORT = 8000;
const db = require('./models/index');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// const indexRouter = require('./routes');
// app.use('/',indexRouter);
const visitorRouter = require('./routes/visitor')
app.get('/',(req,res)=>{
    res.render('index');
});
app.use('/visitor',visitorRouter);
app.get('*',(req,res) => {
    res.render('404');
});
//force : true 는 다시 시작하면 테이블 초기화, 디폴트는 false
db.sequelize.sync({force:false}).then(()=>{
    app.listen(PORT, () =>{
        console.log(`http://localhost:${PORT}`);
    });
});


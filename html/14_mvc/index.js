const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//index를 안쓰면 routes는 기본적으로 index를 찾는다.
const router = require('./routes/index.js')
app.use('/',router);

//ex
//const userRouter = require("./routes/user");
//app.use('/user',userRouter);

//* 맨마지막 선언 use를 써서 모든방식에서 처리할 수 있도록 한다.
app.use('*',(req,res)=>{
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

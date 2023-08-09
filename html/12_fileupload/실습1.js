const { profile } = require('console');
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT  = 8000;

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/uploads',express.static(__dirname + '/uploads'));

const uploadDetail= multer({
    storage: multer.diskStorage({
        destination(req,file,done){
            done(null,'uploads/');
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname);
            console.log('ext',ext);
            done(null, req.body.id + Date.now() + ext);
        },
    }),
    limits : {fileSize : 10 * 1024 * 1024},
})
app.get('/',(req,res)=>{
    res.render('실습1');
});

app.post('/signup', uploadDetail.single('userfile'),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
    res.render('실습1result', {
        userInfo: req.body,
        userfile: req.file.path,
    })
});

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
});
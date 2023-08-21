const express = require('express');
const multer = require('multer');
const path = require('path'); //폴더와 파일의 경로를 쉽게 조작하도록 제공
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));
console.log(__dirname);


const storage = multer.diskStorage({
    //destination: 저장될 경로를 지정(요청객체, 업로드된 파일객체, 콜백함수)
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    //filename: 파일이름 결정(요청객체, 업로드된 파일객체, 콜백함수)
    filename: (req, file, cb) => {
        //한글깨짐현상 없애기
        file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
        //extname: 확장자를 추출
        const ext = path.extname(file.originalname);
        const name = encodeURIComponent(file.originalname);
        //basename: 파일이름 추출(파일이름, 확장자) => 확장자를 제외해서 파일이름이 추출
        const newName = path.basename(name, ext) + Date.now() + ext;
        cb(null, newName);
    },
});

//파일 크기 제한
const limits = {
    fileSize: 5 * 1024 * 1024, //5mb
};
const upload = multer({ storage, limits });

app.post('/dynamic', upload.array('dynamic'),(req,res)=>{
    console.log(req.file);
    res.send(req.files);
})
app.get('/', (req, res) => {
    res.render('index');
});

app.use('*',(req,res)=>{
    res.render('404');
});
//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


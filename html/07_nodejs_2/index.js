//가져오는 모듈
const express = require('express');
// import express from 'express'

//다시 함수형태로 담기
const app = express();
const PORT = 8000;

//set : 속성 설정 view engine을 ejs로
app.set('view engine','ejs');
app.set('views','./views');

//정적인 파일 불러오기
app.use('/public', express.static('./public'));

//get방식의 통신이다. 데이터전송하고싶을땐 post
// '/' 8000 뒤에 붙는것
app.get('/',(req,res) => {
    //send() 클라이언트에 응답 데이터를 보낼때
    // res.send("Hello Express");
    res.send({result: true, code: 1000, message: '회원가입성공', data: {name: "chan"}});
});
app.get('/kdt9',(req,res) => {
    //뷰 엔진 렌더링 send와 다르게 읽으면서 데이터도 보낼 수 있다.
    res.render('test',{name:'chan'});
    // res.send("Hello kdt9");
    
});
app.get('/kdt072801',(req,res) => {
    //뷰 엔진 렌더링 send와 다르게 읽으면서 데이터도 보낼 수 있다.
    res.render('230728_실습1',{name:'chan'});
    // res.send("Hello kdt9");
    
});
app.get('/kdt072802',(req,res) => {
    //뷰 엔진 렌더링 send와 다르게 읽으면서 데이터도 보낼 수 있다.
    res.render('230728_실습2');
    // res.send("Hello kdt9");
    
});
//서버 열기 (port번호)
app.listen(PORT , () => {
    console.log(`http://localhost:${PORT}`);
});
// 아래처럼 간단하게도 가능하다
// app.listen(PORT);
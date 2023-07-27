// const mod = require('./module');
// console.log(mod);

// key값을 불러와야함.
// const {a,b} = require('./module');
// console.log(a,b);


// import {a,b} from './module.js';
// console.log(a+b);

const http = require('http');
//파일시스템
const fs = require('fs');

//f(요청,응답)
//server -> client(응답)
const server = http.createServer(function(req,res){
    // res.writeHead(200);
    // res.write("<h1>Hello World</h1>");
    // res.end("<p>End</p>");

    //파일전송
    try{
        const data = fs.readFileSync('./index.html')
        res.writeHead(200)
        // 표시하면서 끝나는것
        res.end(data)
    }catch(error){
        console.log(error)
        // 404오류 알려주기
        res.writeHead(404)
        res.end(error.message)
    }
});

//서버열기
server.listen(8000,function() {
    console.log('8000번 포트로 실행');
});
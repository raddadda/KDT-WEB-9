const express = require('express');
const http = require("http");
const SocketIO=require("socket.io");
const app = express();
const PORT = 8000;
const server = http.createServer(app);

const io = SocketIO(server);

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('client');
});

io.on('connection', (socket)=>{
    //클라이언트에서 보낸 이름 그대로
    socket.on('open_message',(arg,cb)=>{
        console.log("arg",arg);
        cb(arg);
    })
    // socket.on('open_message',(arg,arg2,arg3)=>{
    //     console.log("arg",arg,arg2,arg3);
    
    // })
    socket.on('form_message',(arg)=>{
        console.log("arg",arg);
        
        //socket.emit("back_message",arg);
        io.emit("back_message",arg)
    });
    socket.on('text_message',(arg)=>{
        console.log("client : ",arg.text);
        
        socket.emit("back2_message",arg);
        
    });
})


server.listen(PORT);
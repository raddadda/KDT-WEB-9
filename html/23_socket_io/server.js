const express = require('express');
const http = require("http");
const { userInfo } = require('os');
const SocketIO=require("socket.io");
const app = express();
const PORT = 8000;
const server = http.createServer(app);

const io = SocketIO(server);

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('client');
});
app.get('/chat',(req,res)=>{
    res.render('chat');
});
io.on('connection', (socket)=>{
   
    console.log('조인 전',socket.rooms);
    //join은 없으면 생성, 존재하면 그 방으로 접속
    socket.on("join",(res)=>{
        //채팅방을 생성하는 방법은 join(방아이디) 사용
        socket.join(res);
        socket.room = res;
        console.log('res',socket.id);
        console.log('조인 후',socket.rooms);
        const roomInfo = io.sockets.adapter.rooms.get(res);
        console.log(roomInfo.size);
        
        //broadcast는 나를제외한 전체 사용자(브라우저)에게 메세지 전달
        socket.broadcast.to(res).emit('create','새로운 브라우저가 입장하였습니다.');
        
    });

    const member = {name:'찬'};

    socket.on("message",(res)=>{
        //io.to(특정방 아이디).emit(이벤트) 특정 방의 전체 사용자에게 메세지 전달 
        //console.log(res.name == member)
        console.log("member",res.name);
        console.log("member",member.name);
       if(res.name == member.name){
        io.to(socket.room).emit('chat',{chk:0,data:res})
       }else{
        io.to(socket.room).emit('chat',{chk:1,data:res})
       }
        
    })
    socket.on("leave",()=>{
        
        const roomInfo = io.sockets.adapter.rooms.get(socket.room);
        
        socket.leave(socket.room);
        console.log(roomInfo.size);
    })
    // //클라이언트에서 보낸 이름 그대로
    // socket.on('open_message',(arg,cb)=>{
    //     console.log("arg",arg);
    //     cb(arg);
    // })
    // // socket.on('open_message',(arg,arg2,arg3)=>{
    // //     console.log("arg",arg,arg2,arg3);
    
    // // })
    // socket.on('form_message',(arg)=>{
    //     console.log("arg",arg);
        
    //     //socket.emit("back_message",arg);
    //     io.emit("back_message",arg)
    // });
    // socket.on('text_message',(arg)=>{
    //     console.log("client : ",arg.text);
        
    //     socket.emit("back2_message",arg);
        
    // });
})


server.listen(PORT);
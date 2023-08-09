const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'newuser',
    password:'2230',
    database:'kdt9',
    port:3306,
});
conn.connect((err) =>{
    if(err){
        console.log('error');
        return;
    }
    console.log('connect');
});

exports.postSignup = (data,callback) =>{
    const query = `insert into user1 (userid,name,pw) values ('${data.userid}','${data.name}','${data.pw}')`
    conn.query(query, (err,rows) => {
        console.log("postSignup",rows);
        callback(rows);
    });
}

exports.postSignin = (data,callback) =>{
    const query = `select * from user1 where userid='${data.userid}' and pw='${data.pw}'`
    conn.query(query,(err,rows)=>{
        console.log('postSignin',rows);
        callback(rows);
    });
}
exports.postProfile = (data,callback) =>{
    const query = `select * from user1 where userid='${data.huserid}'`;
    conn.query(query,(err,rows)=>{
        console.log('postProfile',rows);
        if(err){
            console.log("error",err);
        }
        callback(rows);
    });
};
exports.postProfile_modify = (data,callback) =>{
    const query = `update user1 set userid='${data.userid}' , pw='${data.pw}' , name='${data.name}' where userid='${data.userid}'`
    console.log('^^^^^^^^');
    conn.query(query,(err,rows)=>{
            console.log('postProfile_edit',rows);
        if(err){
            console.log("error",err);
        }
        callback({result:true});
    });
};


exports.postProfile_delete = (data,callback) =>{
    const query = `delete from user1 where userid='${data.userid}'`
    conn.query(query,(err,rows)=>{
        console.log('postProfile_delete',rows);
        if(err){
            console.log("error",err);
        }
        callback({result:true});
    });
};
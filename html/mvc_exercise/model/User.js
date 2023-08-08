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

exports.postSignup = (data, callback) =>{
    const query = `insert into visitor (userid,name,pw) values ('${data.userid}','${data.name}','${data.pw}')`
    conn.query(query, (err,rows) => {
        console.log("postSignup",rows);
        callback(rows);
    });
}

exports.postsignin = (data,callback) =>{
    const query = `select * from user where userid='${data.userid}' and pw='${data.pw}'`
    conn.query(query,(err,rows)=>{
        console.log('postsignin',rows);
        callback(rows);
    });
}
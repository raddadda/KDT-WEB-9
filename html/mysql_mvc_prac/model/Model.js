const mysql = require('mysql');

//mysql 연결
const conn = mysql.createPool({
    host:'127.0.0.1',
    user:'newuser',
    password:'2230',
    database:'kdt9',
    port:3306,
});
//회원가입 정보 데이터베이스 저장
const db_signup = (data,cb) => {
    const query = `INSERT INTO user1 (userid,pw,name) VALUES (${data.userid},${data.pw},${data.name})`;
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('rows',rows);
        cb(rows);
    })
}

//로그인
const db_login = (data,cb) => {
    const query = `SELECT * FROM user1 where userid='${data.userid}' and pw='${data.pw}'`;
    conn.query(query,(err,rows)=>{
        if(err){
            console,log(err);
            return;
        }
        console.log('db_login',rows);
        cb(rows);
    })
}

module.exports = {
    db_signup,
    db_login
}
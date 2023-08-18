//const mysql = require('mysql');
import mysql from 'mysql2/promise';

//mysql 연결
const conn = mysql.createPool({
    host:'127.0.0.1',
    user:'newuser',
    password:'2230',
    database:'kdt9',
    port:3306,
});
//createConnection : 단일연결, 매번 연결이 필요할 때마다 새로운 연결 생성
//연결수가 많아지면 성능에 영향이 생김.
//createPool: 여러연결, 여러개의 연결을 미리 생성하고 관리
//요청이 들어올때마다 생성한 연결을 할당. 동시처리 가능
import crypto from 'crypto';
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipherEncrypt = (word) => {
    const cipher = crypto.createCipheriv(algorithm,key,iv); //암호화 객체 생성
    let encryptedData = cipher.update(word,'utf-8','base64'); //암호화할 데이터 처리 utf-8 -> base64
    encryptedData += cipher.final('base64');
    return encryptedData;
}
const decipher = (encryptedData) => {
    const decipher = crypto.createDecipheriv(algorithm,key,iv) // 복호화 객체 생성
    let decrypredData = decipher.update(encryptedData,'base64','utf-8'); // base64 -> utf-8
    decrypredData += decipher.final('utf-8');
    return decrypredData;
}


export const post_signup = async (data) => {
    try {
        // console.log("data.pw1",data.pw);
        // //암호화
        // console.log("cipherEncrypt", cipherEncrypt(data.pw));
         const encode = cipherEncrypt(data.pw);
         console.log("@@@",encode);
         data.pw = encode;
        //data.pw= "123";
         console.log("decipher", decipher(encode));
         console.log("data.pw2",data.pw);

        const query = 'INSERT INTO user1 (userid, pw, name) VALUES (?, ?, ?)';
        await conn.query(query, [data.userid, data.pw, data.name]);
    } catch (error) {
        console.log(error);
    }
};
export const post_signin = async (data) => {
    try {
        console.log("login_data.pw1:",data.pw);
        //const decode = decipher(encode);
        //console.log("login_data.pw2:",decode);s
        // data.pw=decode;
        // console.log("login_data.pw2:",data.pw);
        const query2 = `SELECT * FROM user1 WHERE userid = ${data.userid}`;
        
        const [rows2] = await conn.query(query2, [data.userid]);
        console.log("q2",rows2);
        console.log("q2pw",rows2[0].pw);
        //console.log("!!!!", decipher('BlEhF7bj7AfGqR7mXM0TGA=='));
       
        
        //if(data.pw === decipher(rows2[0].pw)){
        //    data.pw=decipher(rows2[0].pw);
        //}
        const de = rows2[0].pw;
        const decode = decipher(de);
        
        const query = 'SELECT * FROM user1 WHERE userid = ? AND pw = ?';
        const [rows] = await conn.query(query, [data.userid, data.pw]);
        console.log(rows);
        return rows;
    } catch (error) {
        console.log(error);
    }
};
export const post_profile = async (data) => {
    try {
        const query = 'SELECT * FROM user1 WHERE userid = ?';
        const [rows] = await conn.query(query, [data.userid]);
        return rows;
    } catch (error) {
        console.log(error);
    }
};

export const edit_profile = async (data) => {
    try {
        const query = 'UPDATE user1 SET userid=?, pw=?, name=? WHERE id= ?';
        await conn.query(query, [data.userid, data.pw, data.name, data.id]);
    } catch (error) {
        console.log(error);
    }
};

export const delete_profile = async (id) => {
    try {
        const query = 'DELETE FROM user1 WHERE id = ?';
        await conn.query(query, [id]);
    } catch (error) {
        console.log(error);
    }
};

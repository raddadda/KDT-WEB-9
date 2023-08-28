//const User = require('../model/User');
import * as User from '../model/User.js';

export const index = (req, res) => {
    res.render('index');
};
export const signup = (req, res) => {
    res.render('signup');
};
export const signin = (req, res) => {
    res.render('signin');
};
// //양방향

// const algorithm = 'aes-256-cbc'     //256비트 키를 사용, 블록 크기는 128비트
// const key = crypto.randomBytes(32); 
// const iv = crypto.randomBytes(16); //초기화 벡터, 데이터블록을 암호화할때 보안성을 높이기 위해 사용
// const cipherEncrypt = (word) => {
//     const cipher = crypto.createCipheriv(algorithm,key,iv); //암호화 객체 생성
//     let encryptedData = cipher.update(word,'utf-8','base64'); //암호화할 데이터 처리 utf-8 -> base64
//     encryptedData += cipher.final('base64');
//     return encryptedData;
// }
// const decipher = (encryptedData) => {
//     const decipher = crypto.createDecipheriv(algorithm,key,iv) // 복호화 객체 생성
//     let decrypredData = decipher.update(encryptedData,'base64','utf-8'); // base64 -> utf-8
//     decrypredData += decipher.final('utf-8');
//     return decrypredData;
// }

export const post_signup = async (req, res) => {
    try {
        await User.post_signup(req.body);
        console.log("req.body",req.body);
        console.log("req.body",req.body.pw);
        
       

        res.send({ result: true });
    } catch (error) {
        console.log(error);
    }
};
export const post_signin = async (req, res) => {
    //model
    try {
        const result = await User.post_signin(req.body);
        if (result.length > 0) {
            res.send({ result: true, data: result[0] });
        } else {
            res.send({ result: false, data: null });
        }
    } catch (error) {
        console.log(error);
    }
};a

export const post_profile = async (req, res) => {
    try {
        const result = await User.post_profile(req.body);
        res.render('profile', { data: result[0] });
    } catch (error) {
        console.log(error);
    }
};

export const edit_profile = async (req, res) => {
    try {
        await User.edit_profile(req.body);
        res.send({ result: true });
    } catch (error) {
        console.log(error);
    }
};

export const delete_profile = async (req, res) => {
    try {
        await User.delete_profile(req.body.id);
        res.send({ result: true });
    } catch (error) {
        console.log(error);
    }
};
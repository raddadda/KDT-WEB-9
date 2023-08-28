const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

const comments = [
    {
        id:1,
        userid:'hello',
        gender : 'M',

        major: '수학'
    },
    {
        id:2,
        userid: 'happy',
        gender: 'W',

        major: '경제'
    },
    {
        id:3,
        userid: 'lucky',
        gender: 'M',

        major: '컴공'
    },
    {
        id:4,
        userid:'good',
        gender : 'W',

        major: '영문'
    },
    {
        id:5,
        userid:'nice',
        gender : 'W',

        major: '체육'
    }
    
];

module.exports = comments;

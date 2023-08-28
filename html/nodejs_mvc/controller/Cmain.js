const model = require('../model/Model');

const main = (req,res)=>{
    res.render('index',{lists:model});
}
//조회
const register=(req,res)=>{
    const {userid,gender,major} = req.body;
    model.push({
        id: model.length+1,
        userid,
        gender,
        major
    })
    res.json({result:true});
}


// const member=(req,res)=>{
//     res.render('member');
// }
module.exports = {
    main:main,
    register
   // member
}
//모듈 사용 방법

//방법1
// module.exports.main = 
// exports.main = null
//방법2
// const test = () => {}
// module.exports = test
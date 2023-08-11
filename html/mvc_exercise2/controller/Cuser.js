// const User = require('../model/User');
const models = require('../models')

exports.index = (req,res)=>{
    res.render('index');
}
exports.getSignup = (req,res)=>{
    res.render('signup');
}
exports.postSignup = (req,res)=>{
    // User.postSignup(req.body, () =>{
    //     res.send({result:true});
    // });

    models.User.create({
        userid : req.body.userid,
        name : req.body.name,
        pw : req.body.pw
    }
    ).then(() => {
        res.send({result:true});
    })
}
exports.getSignin = (req,res) =>{
    res.render('signin');
};
exports.postSignin = (req,res) =>{

    // User.postSignin(req.body, (result)=>{
    //     if(result.length>0){
    //         res.send({result:true , data: result[0]});
    //     }else{
    //         res.send({result:false, data: null});
    //     }
    // });

//const {userid,pw} = req.body;
    models.User.findOne({
        where : {userid: req.body.userid, pw:req.body.pw}
    }).then((result) => {
        console.log('findOne',result);
        if(result != null){
            res.send({result:true , data: result});
        }else{
            res.send({result:false, data: null});
        }
    })
};

exports.postProfile = (req,res) => {
    console.log("req.body",req.body.huserid);
    // User.postProfile(req.body, (result)=>{
    //     console.log("성공");
    //     console.log(result);
    //     res.render('profile',{data:result});

    // });

    models.User.findOne(
        {
            where : {userid: req.body.huserid}
        }
    ).then((result) => {
        console.log('findOne',result);
        res.render('profile',{data:result});
    });
}

exports.postProfile_modify = (req,res) =>{
    console.log("req.body m",req.body);
    // User.postProfile_modify(req.body, (result)=>{
    //     console.log("postProfile_modify Cuser 성공");
    //     console.log(result);
    //     res.send(result);
    // })

    models.User.update(
        {
            userid : req.body.userid,
            pw : req.body.pw,
            name : req.body.name
        },
        {
            where : {userid: req.body.userid}
        }
    ).then((result)=>{
        console.log("postProfile_modify Cuser 성공");
        console.log(result);
        res.send({result:true});
    })
}

exports.postProfile_delete = (req,res) =>{
    console.log("req.body d",req.body);
    // User.postProfile_delete(req.body, (result)=>{
    //     console.log("postProfile_delete Cuser 성공");
    //     console.log(result);
    //     res.send(result);
    // })
    models.User.destroy(
        {
            where : {userid : req.body.userid},
        }
    ).then((result)=>{
        console.log("postProfile_delete Cuser 성공");
        console.log(result);
        res.send({result:true});
    })
}
exports.findall = (req, res) => {
    models.User.findAll({
        //attributes 원하는 컬럼 조회
        //attributes: ['name', 'userid'],
        //Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.ne(같지않은)
        //Op.or(또는), Op.in(배열 요소중 하나), Op.notIn(배열요소와 모두다름)
        //where: { id: { [Op.gt]: 2 } },
        order: [['id', 'DESC']],
        
        offset: 1,
    }).then((result) => {
        console.log('findAll', result);
        res.send(result);
    });
};
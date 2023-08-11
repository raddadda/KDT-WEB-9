 const User = require('../model/User');
//const models = require('../models')

exports.index = (req,res)=>{
    res.render('index');
}
exports.getSignup = (req,res)=>{
    res.render('signup');
}

exports.postSignup = (req,res)=>{
    User.postSignup(req.body, () =>{
        res.send({result:true});
    });

}
exports.getSignin = (req,res) =>{
    res.render('signin');
};
exports.postSignin = (req,res) =>{
    User.postSignin(req.body, (result)=>{
        if(result.length>0){
            res.send({result:true , data: result[0]});
        }else{
            res.send({result:false, data: null});
        }
    });
};

exports.postProfile = (req,res) => {
    console.log("req.body",req.body.huserid);
    User.postProfile(req.body, (result)=>{
        console.log("성공");
        console.log(result);
        res.render('profile',{data:result});

    });
}

exports.postProfile_modify = (req,res) =>{
    console.log("req.body m",req.body);
    User.postProfile_modify(req.body, (result)=>{
        console.log("postProfile_modify Cuser 성공");
        console.log(result);
        res.send(result);
    })
}

exports.postProfile_delete = (req,res) =>{
    console.log("req.body d",req.body);
    User.postProfile_delete(req.body, (result)=>{
        console.log("postProfile_delete Cuser 성공");
        console.log(result);
        res.send(result);
    })
}
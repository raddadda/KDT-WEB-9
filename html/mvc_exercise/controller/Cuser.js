const Visitor = require('../model/User');
exports.index = (req,res)=>{
    res.render('index');
}
exports.getSignup = (req,res)=>{
    res.render('signup');
}
exports.postSignup = (req,res)=>{
    User.postSignup(req.body, () =>{
        res.rend({result:true});
    });
}

exports.getSignin = (req,res) =>{
    res.render('signin');
};

exports.postSignin = (req,res) =>{
    //model
    User.postSignin(req.body, (result)=>{
        if(result.length>0){
            res.send({result:true , data: result[0]});
        }else{
            res.send({result:false, data: null});
        }
    });
};
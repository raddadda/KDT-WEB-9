const model = require('../model/Model');


//////////////////////GET//////////////////////
//메인페이지
exports.main = (req, res) => {
    res.render('index');
};
//회원가입페이지
exports.login = (req,res) => {
    res.render('login');
};
//로그인페이지
exports.signup = (req,res) => {
    res.render('signup');
};

//////////////////////POST//////////////////////
exports.post_signup = (req,res) => {
  model.db_signup(req.body,()=>{
    res.json({result:true});
  })
};

exports.post_login = (req,res) => {
   model.db_login(req.body, (result)=>{
    if(result.length > 0){
      res.json({result:true,data:result});
    }else{
      res.json({result:false});
    }
    
   });
};

exports.post_profile = (req,res) => {
  console.log('userid',req.body);
  const result = req.body.userid;
  res.render('profile',result);
}
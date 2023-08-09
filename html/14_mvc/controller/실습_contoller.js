    const Comment = require('../model/실습_model');

   

    exports.main = (req,res) =>{
        res.render('실습2');
    }
    exports.axiosPost= (req,res) => {
        res.render('실습2');
    }
    exports.comment = (req,res)=> {
  

    console.log('back',req.body);
    console.log('@@@',req.body.id);
    console.log('@@@',id1);
    if(req.body.id == Comment[0] && req.body.password == Comment[1]){
        t = true;
        res.send(true);
    }else{
        t = false;
        res.send(false);
    }
};
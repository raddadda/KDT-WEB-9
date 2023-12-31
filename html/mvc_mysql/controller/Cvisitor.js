const Visitor = require('../model/Visitor.js');

exports.main=(req,res)=> {
    res.render('index');
};

exports.getVisitors= (req,res)=>{
    // console.log(Visitor.getVisitors());
    // res.render('visitor', {data : Visitor.getVisitors()});
    Visitor.getVisitors((result)=>{
        res.render('visitor',{data:result});
    });
};
exports.getVisitor = (req,res)=> {
    Visitor.getVisitor(req.query.id, (result) => {
        res.render('visitor',{data:result});
    });
};
exports.postVisitor = (req,res)=>{
    //문자열일때는 '' 추가
    Visitor.postVisitor(req.body, (result) =>{
        res.send({id: result.insertId , name: req.body.name , comment : req.body.comment});
    });
};
exports.patchVisitor = (req,res)=>{
    Visitor.patchVisitor(req.body, () =>{
        res.send({result:true});
    });
};
exports.deleteVisitor = (req,res)=>{
    Visitor.deleteVisitor(req.body, () =>{
        res.send({result:true});
    });
};

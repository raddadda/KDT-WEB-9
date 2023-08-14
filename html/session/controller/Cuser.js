import * as User from '../model/User.js';

export const index = (req, res) => {
    
    res.render('index');
};

export const destroysession =  (req,res)=>{

    console.log(req.session);
    console.log("삭제완료");

    req.session.destroy(function(){
        req.session;
    });

    res.clearCookie('connect.sid')
    console.log(req.session);
    
        
    res.redirect('/user');
    console.log(req.session);
    // res.render('index');
}

export const index_login = (req, res) => {
    res.render('index_login');
};
export const signup = (req, res) => {
    res.render('signup');
};
export const signin = (req, res) => {
    res.render('signin');
};

export const post_signup = async (req, res) => {
    try {
        await User.post_signup(req.body);
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
            req.session.name=req.body.userid;
            console.log(req.session.name);
            res.send({ result: true, data: result[0] , usermain : req.session.name });
        } else {
            res.send({ result: false, data: null });
        }
    } catch (error) {
        console.log(error);
    }
};

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
const { User } = require('../models');
import * as User from '../model/User.js';

// exports.index = (req, res) => {
//     res.render('index');
// };

export const index = (req,res) =>{
    res.render('index');
}

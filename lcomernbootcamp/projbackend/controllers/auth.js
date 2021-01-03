const User = require('../models/user');
exports.signout = function(req,res){
    //sending textual data
    // res.send('In Sign out');
    
    //sending 
    res.json({
        name:'vaishnav',
        surname:'pureddiwar'
    });
}

exports.signup = function(req,res){
    
    const user = new User(req.body);
    console.log(req.body);
    user.save((err,user)=>{
            if(err){
                return err.status(400).json({
                    err:"Not able to update database"
                })
            }

            res.json(user);
    })
    /*console.log('Holla..');
    console.log(req.body);
    //sending 
    res.json({
       message:'signed up!!'
    });*/
}


//module.exports = {signout,signup};
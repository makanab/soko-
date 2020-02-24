
require('../models/user.model');
const  mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const _ = require('lodash');

// call  db model 

const User = mongoose.model('User');



// registert user

module.exports.registerUser = (req,res,next)=>{
    let newUser = new User (req.body);
    newUser.hash_password = bcrypt.hashSync(req.body.password,8);


    newUser.save((err,user )=>{
        if(!err){
            res.status(200).send(user) ;
        }else{
            console.log(res.send(err));
        }
    });
}


// login  logic

module.exports.userAuth = (req,res,next)=>{

    // call passport auth  
 passport.authenticate('local',(err,user,info)=>{

    if(err){
        res.status(501).send(err);

    }


    // registerd user 

    else if(user){

        res.status(200).send({token:user.generateToken()});

    }
    else if(!user){
        
        res.status(501).json(info);
    }




 }
 
 
 )(req,res);

}







// user  location and ip test

module.exports.myIp =(req,res,next)=>{

   }



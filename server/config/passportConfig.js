const passport =  require('passport');
const  localStrategy = require('passport-local');
const  mongoose = require('mongoose');
require('../models/user.model');
const User = mongoose.model('User');

 passport.use(
     new localStrategy(
         {usernameField:'email'},
         (username,password,done)=>{
             User.findOne({email:username}, (err ,user)=>{


                if(err){
                    return done(err);
                }

                // user dosse not exist 
                else if(!user){
                    return  done(null,false ,{message:"user does not exist"});


                }

                // check password 
                

                else if(!user.comparePassword(password)){
                    return done(null,false , {message:"email or password is wrong "})
                }


                // allow user to login
                else if(user){
                    return done(null ,user);

                }





             });

         }
     )

 );







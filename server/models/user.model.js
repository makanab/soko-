const  mongoose = require('mongoose');
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schema  = mongoose.Schema;

//create schema  

const userSchema = new Schema({


    fullname:{
        type:String

    },
    email:{
        type:String

    },
   hash_password:{
        type:String

    },


});




// password validation 

userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.hash_password);
}


// generate  jwt token

userSchema.methods.generateToken = function(){
   return jwt.sign(
       {_id:this._id},
       process.env.JWT_SECRET,
       {
           expiresIn:process.env.JWT_EXP
       }
       
       
       );
    
}




mongoose.model('User', userSchema);

//name model 
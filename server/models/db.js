const  mongoose  = require('mongoose');
// optional settings 

const options  =  {
    useUnifiedTopology:true,
    useNewUrlParser:true
}


// connect to mongodb
mongoose.connect(process.env.MONGODB_URI,options,(err)=>{
    if(!err){
        console.log('monodb connected')
    }
});





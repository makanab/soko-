const  mongoose  = require('mongoose');
const  Schema = mongoose.Schema ;

// items schema 

const itemsSchema = new Schema ({
    description:{
        type:String

    },
    category:{
        type:String

    },
   postedOn: {
       type:Date,
       default:Date.now

    },
    itemPhoto:{
       type:String
    


    }

    

});


// name model

mongoose.model('Item',itemsSchema);


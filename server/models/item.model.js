const  mongoose  = require('mongoose');
const mongoosastic = require('mongoosastic');
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
    


    },
    itemUrl:String

    

});



itemsSchema.plugin(mongoosastic,{
    "host":"localhost",
    "port":"9200"
});




// name model

mongoose.model('Item',itemsSchema);


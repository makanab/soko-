const  express = require('express');
const  router = express.Router();
const  multer = require('multer');
const path = require('path');

const storage =  multer.diskStorage(
    {
        destination:function(req,file,cb){
            cb(null,'./uploads/');

        },
        filename:function(req,file,cb){
            cb(null ,file.originalname);

            
        }
    }
);


// Filefilter
const filter = function(req,file,cb){
    if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' ||file.mimetype ==='image/png'){
        cb(null,true);
    } else{
        cb(null,false);
    }

}

const upload = multer({
    storage:storage , 
    limits:{
        fileSize:1024*1024*10
        
    },
    fileFilter:filter 
    
    });


/*
const upload =multer({dest: 'uploads/', 
rename:function(fieldname,filename){
    return filename;
}
}); */


/*
const storageConfig = require('../config/storageEngineConfig');
const storage = storageConfig.storageEngine;
const upload = multer({storage});
                                                        

*/




// handers 
const  UserHandler =  require('../controllers/user.controller');
const itemHandler = require('../controllers/item.controller');





//user schema routes 
router.post('/register',UserHandler.registerUser);
router.post ('/auth' , UserHandler.userAuth);
router.get('/myip',UserHandler.myIp);




// item schema routes 

router.post('/additem',upload.single('image'), itemHandler.uploadPhoto);
router.get('/items',itemHandler.listItems);







// export  router

module.exports = router;
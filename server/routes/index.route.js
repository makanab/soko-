const  express = require('express');
const  router = express.Router();



// handers 
const  UserHandler =  require('../controllers/user.controller');
const itemHandler = require('../controllers/item.controller');
const fileupload = require('../config/storageEngineConfig');





//user schema routes 
router.post('/register',UserHandler.registerUser);
router.post ('/auth' , UserHandler.userAuth);
router.get('/myip',UserHandler.myIp);
router.get('/users',UserHandler.users);




// item schema routes 


router.post('/upload' ,fileupload.fupload.single('file'),itemHandler.addProduct);
router.get('/product',itemHandler.listProducts);

router.get('/files' , fileupload.getFiles);
router.get('/file/:filename',fileupload.getByname);
router.get('/images', fileupload.displayAll);


//display image

router.get('/image/:filename');

// search route  
//router.get('/Tsearch',itemHandler.testSearch);
//router.post('/search',itemHandler.postSearch);
router.post('/search',itemHandler.postSearch);
router.get('/search',itemHandler.getSearch);




/*
const search = require('../config/searchEngineConfig');
router.post('/search',(req,res)=>{
    search.doSearch(req,res);
})

router.get('/search',(req,res)=>{
    search.doSearch(req,res);
})
*/








// export  router

module.exports = router;
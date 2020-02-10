const gridfsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const  mongoose = require('mongoose');




// init gfs
const options  = {useUnifiedTopology:true};
const conn =mongoose.createConnection(process.env.MONGODB_URI,options);


let gfs
conn.once('open',()=>{
    gfs=(Grid(conn.db,mongoose.mongo));
    gfs.collection('uploads');

});



// create storage  engine 
module.exports.storageEngine= gridfsStorage(
    {
        url:process.env.MONGODB_URI,
        file:(req,flle)=>{
            return new Promise((resolve ,reject)=>{
                crypto.randomBytes(16,(err,buf)=>{
                    if(err){
                        return reject(err);
                    }

                    const filename = buf.toString('hex') + path.extname(file.originalname)
                    const fileInfo ={
                        filename:filename,
                        bucketName:'uploads'
                    };
                    resolve(fileInfo);

                });
            });

        }
    }
);



//storage ingine 2 

module.exports.storageTest = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads');


    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-'+ Date.now()+ path.extname(file.originalname));

    }
});
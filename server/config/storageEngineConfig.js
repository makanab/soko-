const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');


const options = {
    useUnifiedTopology:true,
    useNewUrlParser:true
}
 const conn = mongoose.createConnection(process.env.MONGODB_URI,options);



 let gfs 
 conn.once('open',()=>{
     // init stream 
     gfs = Grid(conn.db, mongoose.mongo);
     gfs.collection('uploads')

 });

 // storage engine 
 const storage = new GridFsStorage(
     {
         url:process.env.MONGODB_URI,
         file:(req,file)=>{
             return new Promise((resolve, reject)=>{
                 crypto.randomBytes(16,(err,buf)=>{
                     if(err){
                         reject();
                     } 

                     const filename = buf.toString('hex') + path.extname(file.originalname);
                     const fileInfo = {
                         filename:filename,
                         bucketName:'uploads'
                     };
                     resolve(fileInfo);



                 });


             });

         }


     });

     
     module.exports.fupload = multer({storage});

     // display all files 

     module.exports.getFiles = (req,res,next)=>{
         gfs.files.find().toArray((err,files)=>{

            if(!files || files.length ===0){
                res.status(404).json({
                    err:"file not found"
                });
            } else{
                return res.json(files);
            }

         })
     }

     // find file by name 

     module.exports.getByname = (req,res,next)=>{
         gfs.files.findOne({filename:req.params.filename},(err,file)=>{


            if(!file || file.length ===0){
                res.status(404).json({
                    err:"file not found"
                });
            } else{

                // check image 
                if(file.contentType ==='image/jpeg' || file.contentType ==='img/png'){
                 const readstream = gfs.createReadStream(file.filename);
                 readstream.pipe(res)

                }else{
                    return res.status(404).json({err:'not image'});

                }



               
            }



         });
        
        
        
        }



        // display image 


        module.exports.displayAll= (req,res,next)=>{
            gfs.files.findOne({},(err,file)=>{
   
   
               if(!file || file.length ===0){
                   res.status(404).json({
                       err:"file not found"
                   });
               } else{
   
                   // check image 
                   if(file.contentType ==='image/jpeg' || file.contentType ==='img/png'){
                    const readstream = gfs.createReadStream(file.filename);
                    readstream.pipe(res)
   
                   }else{
                       return res.status(404).json({err:'not image'});
   
                   }
   
   
   
                  
               }
   
   
   
            });
           
           
           
           }
   

     


require('../models/item.model');
const mongoose = require('mongoose');
const Product  = mongoose.model('Item');
const fs  = require('fs');


// add product 
module.exports.addProduct= (req,res,next)=>{
    //  res.json({file:req.file})
    let newProduct = new Product();
    newProduct.description = req.body.decription;
    newProduct.category  = req.body.category;
    console.log(req.file);
    newProduct.itemPhoto = req.file.filename
    newProduct.itemUrl ="http://localhost:3000/api/file/"+req.file.filename;
    newProduct.save((err,result)=>{
        if(err){
            res.status(501).send({err:"could not save an error occurd "});
        } else{
            res.status(200).send(result);

        }

    })

}



//lis products 


module.exports.listProducts= (req,res,next)=>{
    Product.find({},(err,product)=>{
      if(!err){
        res.status(200).json(product)
      }

    });

  
   
}


//find  one 
module.exports.searchItem = (req,res,next)=>{
    Product.findOne({},(err,item ));
}


//update 
module.exports.update = (req,res,next)=>{

    Item.findByIdAndUpdate({},(err,item)=>{

    })
 
}


// delete item  


module.exports.delete = (req,res,next)=>{
    Item.findByIdAndRemove({}, err,item);
}





/*

module.exports.addItem = (req,res,next )=>{

    let newItem = new Item();
    newItem.description =req.body.description;
    newItem.categorie = req.body.categorie;
    console.log(req.file);

    newItem.itemPhoto.data =fs.readFileSync( req.file.image.path);
    newItem.itemPhoto.contentType = 'image/png'
   newItem.itemPhoto.contentType = req.file.image;


  const file = req.file;
  res.send(file);
    
}

*/




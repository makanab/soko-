
require('../models/item.model');
const mongoose = require('mongoose');
const fs = require('fs');
const Item = mongoose.model('Item');
const path = require('path')


// add item 




module.exports.uploadPhoto = (req,res,next)=>{

   let newItem  = new Item();
   newItem.description =req.body.description;
   newItem.category =req.body.category;
   newItem.itemPhoto = req.file.path
   
   newItem.save((err,item)=>{
       if(!err){
           res.status(200).send(item);

       }

   });

  
   }




//list  items


module.exports.listItems= (req,res,next)=>{
    Item.find({},(err,items)=>{
      if(!err){
        res.status(200).json(items)
      }

    });

  
   
}


//find  one 
module.exports.searchItem = (req,res,next)=>{
    Item.findOne({},(err,item ));
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






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


/*


   // search test 

   module.exports.testSearch=(req,res,next)=>{

    Product.search({
        query_string:{query:"mach"}
   
    },(err,results)=>{
        if(err) res.send(err);
        res.send(results);
    })
       
}*/






// elasticsearch config 
//@DESC  indexing and mapping 
  

Product.createMapping((err ,mapping)=>{
    console.log('mapping created');

});

 let  stream = Product.synchronize();
  let  count = 0;

 stream.on('data',function(){
     count ++;

 });

 stream.on('error',function(err){
     console.log(err);


});

stream.on('close',function(){
    console.log("Indexed"+count+"documents");

});

// product search 

module.exports.postSearch =(req,res,next)=>{
 const q = req.body.q
 console.log(q);
    res.redirect('http://localhost:3000/api/search?q='+req.body.q);

}

module.exports.getSearch =(req,res,next)=>{
    if(req.query.q){
        Product.search({
            query_string:{query:req.query.q}
        }, (err,results)=>{
            results:
            if(err) return next(err);
            const data = results.hits.hits.map((hit)=>{

                return hit;

            });
            res.send({
                query:req.query.q,
                data:data
            })
        });
    }
    
}


//list  products 
module.exports.products = (req,res,next)=>{
    Product.find({},(err,products)=>{
        if(err){
            res.status(501).send(err);
        }  else{
            res.status(501).send(products);
        }
    })
}




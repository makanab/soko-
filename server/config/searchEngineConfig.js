

const elasticsearch  =  require('elasticsearch');


// check search params 

const isEmpty = function isEmpty(object , property){

    return ((object[property]===undefined) || 
    (object[property].length===0)||
    (object[property]==='undefined'));

}


// perform a querty against lasticsearch

module.exports.doSearch = function doSearch(req,res){
    // init elasticsearch 
    const client = elasticsearch.Client({
        host:'localhost:9200'
    });


    let searchString ='';
    let searchType ='';

    // prepare the request body

    const body   =  {
        size:100
    };

    if(!isEmpty(req.query,'search') || !isEmpty(req.query,'type')){
        const query  ={
            bool:{}
        }
    

    if(!isEmpty(req.query,'search')){
        query.bool.must ={
            multi_match:{
                fields:[
                    'category',
                    
                ],
                query:req.query.search,
                fuzziness:'auto'
            }
        };
        searchString = req.query.search;
    }


    if(!isEmpty(req.query,'type')){
        query.bool.filter = [
          {  term:{
                type:req.query.type
            },
        },
        ];
        searchType = req.query.type;
    
    
    }

    body.query = query; 

}






    
// add a type facet 

body.aggs={
    type:{
        terms:{
            field:'type'
        }
    }
}


// perform search request 

client.search({
    index:'items',
    body,
}).then((resp)=>{ 
    
    res.send({
        hits:resp.hits.hits,
        total:resp.hits.total,
        aggregations:resp.aggregations.type.buckets,
        searchString,
        searchType
    });

},(err)=>{
    console.trace(err.message);

});




}







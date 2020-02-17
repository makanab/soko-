
require('./config/config');
require('./models/db');
require('./config/passportConfig');
const express  = require('express');
const bodyparser  = require('body-parser');
const cros = require('cors');
const  app = express();
const rtsIndex = require('./routes/index.route');
const passport = require('passport');
const crypto = require('crypto');
const path  = require('path');
const  methodOverride = require('method-override');


// additional modules  

// middleware 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cros());
app.use(methodOverride('_method'));
app.use(passport.initialize());
//app.use('/uploads',express.static('uploads'));
app.use('/api',rtsIndex);







//start server 
app.listen(process.env.PORT,()=>{
 
    console.log('server connected at port '  + '' + process.env.PORT);
    
})





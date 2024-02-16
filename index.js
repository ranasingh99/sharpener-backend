const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.urlencoded({extended:false}));
// middleware are the function which basically helps to filter the conditions 


// once client will visit to the '/product' server will show the html page in response 
// to the client 
app.use('/addproductform',(req,res,next)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
// now once form will submit the details will go and save at path 'addProduct' and we can acess that body

app.use('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
// when form will submit the form-body and the it will saved at 'addProduct' path
// then it will be redirect to the further './' path

app.use('/',(req,res,next)=>{
   return res.send('<h1>HomePage</h1>');
})

app.listen(5000);
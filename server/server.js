const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req);
    
    res.end("Welcome you have just created server");
})

server.listen(3000 ,function(){
    console.log('server is running on some port');
});
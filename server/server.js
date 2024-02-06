const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');// it will set what kind of data we r gng to send
    res.write('<html>')// res.write is used to write the response and it works in chunks;
    res.write('<head><title>NodeFirstPage</title></head>');
    res.write('<body><h1>Welcome to the my first Node Project</h1></body>');
    res.write('</html>');
    res.end();

})

server.listen(3000);
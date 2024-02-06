const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url === '/home'){
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<head><title>HomePage</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        res.end();

    }
    if(req.url === '/about'){
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<head><title>AboutPage</title></head>');
        res.write('<body><h1>Welcome To About Us Page</h1></body>');
        res.write('</html>');
        res.end();
    }
    if(req.url === '/node'){
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<head><title>NodeJsProject</title></head>');
        res.write('<body><h1>Welcome To NodeJs Project</h1></body>');
        res.write('</html>');
        res.end();
    }

})

server.listen(3000);
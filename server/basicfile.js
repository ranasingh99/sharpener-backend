const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
      
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><button type="submit">SEND</button></form></body>');
        res.write('</html>');
        return res.end();

    }
    if(url === '/message' && method ==='POST'){
        // getting the data of the form on submit which runs in the form of data stream and we
        // can capture it in the form of chunks and perform operation on that
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
                body.push(chunk);
        });
        // now we got the pieces of msg and we will buffer and make single string
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            // now write this message in file

            const formdata = parsedBody.split('=')[1];
            fs.writeFileSync('formdata.txt',formdata);

        })
       // fs.writeFileSync('message.txt','DUMMY');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<p>Welcome to the node js</p>');
    res.write('</html>');
    res.end();
})

server.listen(3000);

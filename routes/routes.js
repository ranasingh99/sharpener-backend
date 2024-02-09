const fs = require("fs");

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    const body = [];
    if(url === '/'){
    res.write("<html><head><title>Welcome to the routing</title></head><body>")
    res.write('<form action="/message" method="POST"><input type="text" name="msg"><button type="submit">SEND</button><form>');
    res.write("</body></html>");
    res.end();
    }
    if(url === '/message' && method === 'POST'){
        req.on('data',(chunk)=>{
            body.push(chunk);
        });

        return req.on('end',()=>{
            const message = Buffer.concat(body).toString().split('=')[1];
            fs.writeFileSync('message.txt',message);
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
        }
        )
    }

    
}

module.exports = requestHandler;
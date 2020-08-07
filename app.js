// start of section 3 - node.js basic
// core packages - http, https, fs, os, path
// 

const http = require('http');
const fs = require('fs');

// Function can be called from createServer in either of following ways
// Method 1 - create separate function
// function rqListener(req, res) {    
// };
// Method 2 - call as follws
// http.createServer(function(req, res){
// Method 3 - call as follows - all means samething
const server = http.createServer((req, res) => {
    const url = req.url;
    method = req.method;
    // body  = req.body;
    if (url === '/'){
        res.write('<html')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><h1>URL is root</h1></body>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html')
        return res.end()
    }
    if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=> {
            const parsedBody  = Buffer.concat(body).toString();
            console.log(body);
        });
        fs.writeFileSync('message.txt','dummy text');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    // console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Header','text/html');
    res.write('<html')
    res.write('<head><title>This is title</title></head>')
    res.write('<body><h1>URL is not root / </h1></body>')
    res.write('</html')
    res.end()
});

server.listen(3000);

// nodejs lifecycle
// createServer.listen is event listner which keeps on listening event
// this is event driven approach
// nnodejs uses event driven apppraoch for everything

// Routing
// See if (url === '/') above

// parsing bodies
// see req.on('data', (chunk)
//  Buffer.concat(body).toString();

// event  driven  execution
//  understand some code will be executed later

// blocking and non blocking code
// 
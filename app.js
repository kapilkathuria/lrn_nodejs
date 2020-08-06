// start of section 3 - node.js basic
// core packages - http, https, fs, os, path
// 

const http = require('http');

// Function can be called from createServer in either of following ways
// Method 1 - create separate function
// function rqListener(req, res) {    
// };
// Method 2 - call as follws
// http.createServer(function(req, res){
// Method 3 - call as follows - all means samething
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Header','text/html');
    res.write('<html')
    res.write('<head><title>This is title</title></head>')
    res.write('<body><h1>This is body</h1></body>')
    res.write('</html')
    res.end()
});

server.listen(3000);

// nodejs lifecycle
// createServer.listen is event listner which keeps on listening event
// this is event driven approach
// nnodejs uses event driven apppraoch for everything

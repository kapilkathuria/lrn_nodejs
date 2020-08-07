const fs = require('fs');

// Routing
// See if (url === '/') above

// event  driven  execution
//  understand some code will be executed later

// blocking and non blocking code
// writeFile is async / non blocking and hence one need to wait
// writeFileSync is blocking code

const requestHandler = (req, res) => {
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
            // console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=> {
            // parsing bodies
            // see req.on('data', (chunk)
            //  Buffer.concat(body).toString();
            const parsedBody  = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];        
            fs.writeFile('message.txt', message , err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();        
            });
        });  
    }
        
    // console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Header','text/html');
    res.write('<html')
    res.write('<head><title>This is title</title></head>')
    res.write('<body><h1>URL is not root / </h1></body>')
    res.write('</html')
    res.end()
    
};

module.exports = requestHandler;

// other way of exporting
// 1. 
// module.exports = {
//     handler = requestHandler,
//     someText = 'some text to be exported'
// }
// 2. 
// module.exports.handler = requestHandler;
// module.exports.someText = 'some text to be exported';
// 3. 
// exports.handler = requestHandler;
// exports.someText = 'some text to be exported'; 
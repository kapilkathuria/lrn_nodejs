// start of section 3 - node.js basic
// core packages - http, https, fs, os, path
// 

const http = require('http');
const routes = require('./routes');

// Function can be called from createServer in either of following ways
// Method 1 - create separate function
// function rqListener(req, res) {    
// };
// Method 2 - call as follws
// http.createServer(function(req, res){
// Method 3 - call as follows - all means samething
const server = http.createServer(routes)

server.listen(3000);

// nodejs lifecycle
// createServer.listen is event listner which keeps on listening event
// this is event driven approach
// nnodejs uses event driven apppraoch for everything

// nodejs - looking behind the scenes
// nodejs has single thread
// event loop: for fast executing code
//  handles all the callbacks:
//      1. check if there are any timers callback
//      2. check pending callbacks
//      3. Poll: execute of i/o event callbaks
//      4. check: setimmediate
//      5. close events callback
// worker pool: for code block which are async and will take time to execute
// 
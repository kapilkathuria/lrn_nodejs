// Express.js

// this section covers
// 1. what is ezpress js
// 2. using middleware
// 3. working wiht requests and responses
// 4. routing
// 5. returing html pages/files

// 1. what is ezpress js
// for example extracting data itself take lot of code in pur nodejs
// expressjs helps reduce effort in this kind of things
// good things about express: hundred of thousand other packages integrate with express.
//  quite felxible and extensive

// alternatives: vanilla nodejs, adonis.js, koa, sails.js

// 2. using middleware
// incoming rquest is channeled through middleware. 
// i.e. multiple code blocks can run together
//  see app.js

// 3. working wiht requests and responses
// see following in app.js
// body-parser
// console.log(req.body);

// 4. routing
// 


// use method allows us add middleware. app.use code block is middleware
// this wil be called for all incoming requests
// next: is anothe rfunction which will be tel lwhich next middleware need to be executed
//  unless next is called code remains in current code block
app.use((req, res, next) => {
    console.log ('in middleware');
    next();  //allows next middleware to be called otherwise code execution remain sin current middleware
})


// Files changes
// routes.js has been renamed as routes_section4.js, app.js as app_section.js

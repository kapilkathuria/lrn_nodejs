// Course: https://www.udemy.com/course/nodejs-the-complete-guide

// Moduel 1 - JS referesher

// earlier java
const fs = require("fs");
// var name = 'Max';

console.log("Hello from nodejs");
// print(name)

function print(name) {
    console.log(name);
}

// fs.writeFileSync('hello.txt', "hello from nodejs")


// new syntax for  ES6
// defining variable
const name="kapil" // this variable doens't change
let age="30" //age can change

// function - arrow function
const print2  = (name) => {
    // in this function 'this' keyword can be used
    console.log(name);
}

// othe way of writing function
const add = (a,b) => {
    return a+b;
};

// or other way
const add2 = (a,b) => a+b;
print2(add2(3,5));

// ---------------------------
// ---------------------------
// Objects, properties and methods
const person = {
    name: 'kapil',
    age:'30',

    // greet: () => {
    //     console.log("HI, i am "+ this.name);
    // }
    // when used like above this refers to global scope of node itself rather than current object
    // hence, function in an object need to be defined as follows:
    // greet(){} or greet: function() {}
    // greet: function() {
    //     console.log("HI, i am "+ this.name);
    // }
    greet(){
        console.log("HI, i am "+ this.name);
    }
}

person.greet();

// Arrays
hobbies = ['read', 'playing']
// for (let hobby of hobbies){
//     console.log(hobby)
// };
console.log(hobbies.map(hobby => hobby))
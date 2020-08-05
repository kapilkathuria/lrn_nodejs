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
const hobbies = ['read', 'kids games']
// for (let hobby of hobbies){
//     console.log(hobby)
// };
console.log(hobbies.map(hobby => hobby));

// this does't give error though hobbies is defined as const
// as hobbies is an array and array is refernce data type
hobbies.push('piano');
console.log(hobbies);

// -----spread and rest operator---------
// creating copy of an array
// const copiedarray = slice(hobbies)
// const copiedarray = [hobbies]
// othe way is using spread
// this also works for objects
const copiedarray = [...hobbies];
console.log(copiedarray);

// rest operator
// oppostie of spread
const toArray = (...args) => {
    return args
};

console.log(toArray(1,2,3,4));

// -------------Async and Promises-------------
// async - code ocntinues to run , doesn't wait for currentl ine to end
// promises - returns two functions resolve  and reject
//  resolve: when promise is cmpleted
//  reject: when promise is not complted
//  .then can be used multiple site
// another good explanation on ppromises: https://www.youtube.com/watch?v=DHvZLI7Db8E

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Done!');
      }, 1500);
    });
    return promise;
  };
  
  setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
      .then(text => {
        console.log(text);
        return fetchData();
      })
      .then(text2 => {
        console.log(text2);
      });
  }, 2000);
  
  console.log('Hello!');
  console.log('Hi!');


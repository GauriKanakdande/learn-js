"use strict"; // treat all js code as newer version

// alert(3+3)  // here node.js is used not browser  

// Primitive data type
/**
 * number 
 * bigint
 * string
 * boolean
 * null => standalone value
 * undefined => e.g let name; // it does not have any value
 * symbol
 * object
 */

console.log(typeof "gauri") //string
console.log(typeof undefined)  // undefined
console.log(typeof null)  // object


// non-primitive data types
/**
 * Arrays
 * Objects
 * Functions
 */

let arr = [1, 2, 3]

let myObject = {
    name: "gauri",
    age: 22
}

let myFunction = function(){
    console.log("hi js");
}

// == : is loose equalto operator i.e "2" == 2 => it will return true
// ===: strict equalto operator i.e it checks data types along with data 


// Memory in JS
/**
 * Stack : It is used to store primitive data types 
 * Heap : Non-primitive data types are stored in heap
 */

let userOne = {
    name : "gauri",
    id : 123
}

let userTwo = userOne
userTwo.name = "ash"

console.log(userOne)
console.log(userTwo)
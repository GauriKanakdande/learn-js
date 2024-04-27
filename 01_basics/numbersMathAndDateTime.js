// **************Numbers***************

let num = 20.8939

// console.log(num.toLocaleString())        // 20.894
// console.log(num.toPrecision(2))          // 21
// console.log(num.toFixed(2))             // 20.89

let num2 = new Number(30.678)
// console.log(typeof num2)                // object
// console.log(typeof num)                 // number
// console.log(typeof Number)              // function

// **************Math*****************

// console.log(Math.ceil(num2))            // 31
// console.log(Math.floor(num2))           // 30
// console.log(Math.round(num2))           // 31

//random : it gives any values between 0 to 1
//if we want to customize values lets say want from 1 to 10 then 
/**
 * min = 1
 * max = 10
 * formula = (Math.random() *(max-min +1)) + min
 */

// console.log(Math.floor((Math.random()*(10-1+1 )+ 1)))

let min = 10
let max = 20

// console.log(Math.floor((Math.random()*(max-min+1))+min))

// ***********************Date and time ***********

let myDate = new Date()
console.log(myDate)

console.log(myDate.getDate())
console.log(myDate.toLocaleString())
console.log(myDate.getTime())
console.log(myDate.toLocaleTimeString())
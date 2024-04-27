// two ways to declare a function 

//1
console.log(addNum(100))            // 110
function addNum(num1){
    return num1 + 10
}
console.log(addNum(100))            // 110

// 2
console.log(addNumbers(200))        // ReferenceError: Cannot access addNumbers before initialization
const addNumbers = function(num1){
    return num1 + 10
}
console.log(addNumbers(200))        //210
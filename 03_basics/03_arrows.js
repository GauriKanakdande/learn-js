// ********** this **************

let user = {
    userName: "gauri",
    website: "youtube",

    wellcomeMessage: function(){
        console.log(`hellowwww, ${this.userName}`)          // values of object are accessed using this keyword
    }
}

console.log(user.wellcomeMessage())

function addTwo(num1 , num2){
    console.log(this.num1)                      // undefined this is not used in functions only used in objects 
    console.log(this)                           // it returns non empty object
    return num1 + num2
}
console.log(addTwo(1, 2))

const addNum = function(num1 , num2){
    console.log(this.num1)                      // undefined this is not used in functions only used in objects 
    console.log(this)                           // it returns non empty object
    return num1 + num2
}
addNum()

console.log(this)                              
 /**
  * it returns a empty object. As this is a node environment it returns empty object
  * if same console.log(this) is executed in browser console then it will return the object of window which 
  * has its own methods mostly used in web development
  */ 

//  arrow function

const addition = (num1, num2) => {

    console.log(this.num1)          // undefined
    console.log(this)               // empty object
    return num1 + num2
}

addition()

// arrow function without return statement if function has only single statement

const addInOneLine = (num1, num2) => num1 + num2
console.log(addInOneLine(2, 2))

const addInOneLIneP = (num1,num2) => (num1 + num2)  // no need to use return statement

// return statement is used when { } are given while writting function

const sayHi = (name) => ({userName: name})          // most used syntax in react
console.log(sayHi("gauri"))                         // { userName: 'gauri' }

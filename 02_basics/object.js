// ************** objects  literals **********************

// const sym = new Symbol()  // TypeError: Symbol is not a constructor
const sym = Symbol("key1")
console.log(typeof sym)     // symbol

const newSym = Object(sym)
console.log(typeof newSym)  // object

let user = {
    name : "gauri",
    [sym]: "symbolKey",  // this is how symbol is used in object
    age : 24,
    email: "gauri@Abc.com",
    "full name": "gauri kanakdande",
    location: "pune",
    phone_no: [7589066666, 9480555555]
}

// two ways to access properties of object

// console.log(user.email)
// console.log(user["full name"]) 

// console.log(user["location"])
// console.log(user)

// console.log(user[sym])          // symboleKey
// console.log(sym)                // Symbol(key1)
// console.log(newSym)             // [Symbol: Symbol(key1)]

user.firstFunction = function(){
    console.log("hello js")
}

user.newFunction = function(){
    console.log(user.email)
    console.log(user["full name"])
    console.log(user[this.email])
}

console.log(user.firstFunction)
console.log(user.firstFunction())

console.log(user.newFunction())


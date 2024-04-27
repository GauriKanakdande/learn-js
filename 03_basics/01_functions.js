// ************** functions *********************

function printMyName(){
    console.log("gauri")
}
// printMyName();

function addNumbers(num1 , num2){
    if(num1 === undefined || num2 === undefined ){
        console.log("enter valied number")
    }
    if(!num1 || !num2 ){
        console.log("enter valied number 1")
        return
    }
    return num1 + num2
}

// let result = addNumbers(null, null)
// console.log(result)
// // output
// // enter valied number 1
// // undefined

// let result1 = addNumbers(undefined, null)
// console.log(result1)
// output
// enter valied number
// enter valied number 1
// undefined

// with multiple parameters at runtime...

function calculateCartPrice(...num1){               // spread or rest operator takes multiple values and returns array
    return num1;
}

console.log(calculateCartPrice(200, 300 , 400))     // [ 200, 300, 400 ]

// object as parameter
function returnObjectData(anyObject){
    console.log(`I am ${anyObject.name} from ${anyObject.location}`)
}

let user = {
    name: "gauri",
    location: "pune"
}

returnObjectData(user)
returnObjectData({
    name: "tridha",
    location: "patana"
})

// array as parameter
function myData(data){
    console.log(`my array data is ${data}`)
}

let arrayData = [1, 2, 3]
myData(arrayData)

myData(["gauri", "tridha", "prakhya"])
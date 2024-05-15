// for of loop : not used for objects 

let arr = [1, 2, 3, 4, 5]

for (const iterator of arr) {
    // console.log(iterator)
}

let stringValues = "Hey Gauri"

for (const value of stringValues){
    // console.log(value)
}

const map = new Map()
map.set("gauri", 24)
map.set("ash", 23)
map.set("harish", 22)

for(const [key, value] of map){
    // console.log(`hey ${key} is ${value} years old`)
}

// for in loop : used for objects, arrays but not for maps

let myObject = {
    java: ".java",
    python: ".py",
    c: ".c",
    javaScript: ".js"
}

for(const lang in myObject){
    // console.log(`extension for ${lang} is ${myObject[lang]}`)
}

// for each loop: callback function

let coding = ["java", "javaScript", "python", "cpp" ] 

coding.forEach(function print(item){
    // console.log(item)
})

// arrow function in forEach
coding.forEach((item) => {
    console.log(item)
})

coding.forEach((item, index, coding)=>{
    // console.log(item, index, coding)           // index is index of item and coding will give whole array
})

// objects with forEach loop

const user = [ 
    {
        name : "gauri",
        email : "gauri@yahoo.com"
    },
    {
        name : "ash",
        email : "ash@yahoo.com"
    },
    {
        name : "neera",
        email : "neera@yahoo.com"
    }
]

user.forEach((item) => {
    // console.log(item.name)
})

let nums = []
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
numbers.forEach((item) => {
    if(item>4){
        nums.push(item)
    }
} )

console.log(nums)

// we cannot return any value from forEach loop hence filters are used
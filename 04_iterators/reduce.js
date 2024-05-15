// reduce : callback function

let nums = [1, 2, 3]

let total = nums.reduce( function (acc, val){
     
    return val + acc
}, 0)

/**
 * Initially acc contains value 0 as given before closing parenthesis
 * after each iteration val of acc will be acc+ val
 * 
 * it is similar when we do addition of array elements using for loop and declare sum initially to zero
 * here that sum is called accumulator
 */

const values = nums.reduce( (acc, val) => (acc + val), 0)
console.log(values)

let courses = [
    {
        name: "java course",
        price: 4999
    },
    {
        name: "python course",
        price: 5999
    },
    {
        name: "js course",
        price: 2999
    },
    {
        name: "cpp course",
        price: 1999
    }
]

const totalCartValue = courses.reduce( (acc, val) => {
    return val.price + acc
}, 0)
console.log(totalCartValue)
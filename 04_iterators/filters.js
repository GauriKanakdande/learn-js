// filters work same as forEach but also returns requied elements

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let values = nums.filter((val) => val<7)
// console.log(values)

values = nums.filter( (val) => {
    return val != 5                           //use return statement if {} scope is open
})
// console.log(values)

values = nums.filter( (val) => {
    return val * 10                          //it returns same nums array doesn't multiply each no. with 10 as filters works on true or false condition
})
console.log(values)

const users = [ 
    {
        name : "gauri",
        email : "gauri@yahoo.com",
        rating : 4
    },
    {
        name : "ash",
        email : "ash@yahoo.com",
        rating : 3
    },
    {
        name : "neera",
        email : "neera@yahoo.com",
        rating : 5
    }
]

let user = users.filter( (us) => {
   return us.rating === 4 
}
)
// console.log(user)


// to perform operation on each value and then return the updated value we should use a map
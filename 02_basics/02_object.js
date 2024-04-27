// singleton object

let netflixUser = new Object()

netflixUser.id = "124"
netflixUser.name = "parkhya"
netflixUser.location = "banglore"

console.log(netflixUser)
console.log(netflixUser["id"])

console.log(Object.keys(netflixUser))
console.log(Object.values(netflixUser))
console.log(Object.entries(netflixUser))

let randomUser = {
    email: "gauri@gfg.com",
    userInfo: {
        userFullName: {
            firstName: "gauri",
            lastName: "kanakdande"
        }
    }
}

// console.log(randomUser.userInfo.userFullName.firstName)

let commonObject = {...netflixUser, ...randomUser}   // mostly used
console.log(commonObject)

// let obj = Object.assign({}, netflixUser, randomUser)
// console.log(netflixUser)
// console.log(obj)

// obj = Object.assign(netflixUser, randomUser)
// console.log(netflixUser)
// console.log(obj)


let dataArray = [
    {
        name: "gauri",
        age : 20

    },
    {
        name: "nidhi",
        age : 22
    }
]
console.log(dataArray[1].name)
console.log(Object.keys(dataArray))
console.log(Object.values(dataArray))

let shopCart = {
    id : 123,
    category: "cloths",
    price: 2000
}

shopCart.category           // not preffered

const {id} = shopCart       // mostly this way is used to access the variables from object. in react also generally in {} props are specified
console.log(id)

const {id: idValue} = shopCart  // this is another way where we have assign different name to access value of id
console.log(idValue)


// *************Arrays************************//

let arr = [1 , 2, 3, 4, 5]

// console.log("sliced array", arr.slice(1,3))
// console.log("A", arr)

// console.log("spliced array", arr.splice(1,3))
// console.log("A", arr)

let arr2 = new Array(1,2,3,4,5)

console.log(arr2.unshift(10))  // it shifts first index and add 10 to array
 console.log(arr2)

 console.log(arr2.shift(5))    // it removes first element 
 console.log(arr2)

let friends = [ "rachel", "chandler", "monika", "joey", "ros" , "pheobe"]
let himym = [ "ted", "robin", "bearny", "lilly", "marshall"]

// console.log(friends.push(himym)) // it adds himym array as whole element in friends array
// console.log(friends) 

let all_friends = friends.concat(himym) // it creates array which has all elements
console.log(all_friends)

let number = [1, 2, 3, 4, ["A1", "B1"], 5, 6, ["C1", "D1", ["a1", "b1"], 7, 8 ]]

console.log(number.flat(1))         // add elements upto depth 1 and creates array
console.log(number.flat(Infinity)) // gives whole array reads all depth

let a = 10
let b = 20
let c = 30

console.log(Array.of(a, b, c, number))

console.log(number.indexOf(6))
console.log(number.includes(4))  

console.log(Array.from("gauri")) // it converts "gauri" into character array

let newArr = [...friends, ...arr2, ...himym]   // ... is a spread operater it combines multiple arrays into single array
console.log(newArr)


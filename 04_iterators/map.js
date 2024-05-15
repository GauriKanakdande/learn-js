// map : callback function iterators over array and performs operation and return the vlaues

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let nums = numbers.map( (val) => val*10)
console.log(nums)

nums = numbers.map( (val) => { return val +10 })
console.log(nums)  

nums = numbers
            .map( (val) => val*10)
            .map( (val) => val+2)
            .filter( (val) => val>30)

console.log(nums)

// chaining : in above e.g values of first map are input for second map and output of second map function will be 
//            input to filter callback function

/**
 * .map( (val) => val*10) : [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] => this will be input to second map
 * .map( (val) => val+2) : [12, 22, 32, 42, 52, 62, 72, 82, 92, 102] => this will be input to filter
 * .filter( (val) => val>30) : [32, 42, 52,  62, 72, 82, 92, 102]
 */
let name = "Gauri"
let id = 123

// use backtick 
console.log(`Hello I am ${name} and my id is ${id}`); 

let useString = new String("gauriKanakdande")
console.log(useString)

// String methods

console.log(useString.charAt(4))                            // i
console.log(useString.charCodeAt(4))                        // 105
console.log(useString.codePointAt(4))                       // 105
console.log(useString.concat(" ", `${name}`))               // gauriKanakdande Gauri
console.log(useString.endsWith("d", 14))                    // true
console.log(useString.includes("aur"))                      // true
console.log(useString.indexOf('a'))                         // 1 
console.log(useString.lastIndexOf('a'))                     // 11
console.log(useString.length)                               // 15
console.log(useString.slice(5 , 15))                        // kanakdande
console.log(useString.split('a'))                           // [ 'g', 'uriK', 'n', 'kd', 'nde' ]
console.log(useString.startsWith('gau'))                    // true
console.log(useString.substring(0, 5))                      // gauri

// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 4342423424524n


// Reference ( Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman" , "naagraj" , "doga"]
let myObj = {
    name: "trupti",
    age: 22,

}
const myFunction = function(){
    console.log("Hello world")
}
// console.log(typeof myFunction);
// console.log(typeof heros);


// ++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "truptiramanuj"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
} 

let userTwo = userOne

userTwo.email = "trupti@google.com"

console.log(userOne.email);
console.log(userTwo.email);
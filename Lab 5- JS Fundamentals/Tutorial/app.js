//Syntax of JS
//Variable declaration
//let , const
const name = "Abdulahi";
const age = 100;
const height = 2.0;

// for (let i = 0; i < 10; i++) {
//     console.log(name , age , height)
// }

//How to decide between the let and const.
// const names = ["Abdulla Khedr,", "Mustafa Ilmi," , "Mohamed Omar,"]
// for (const name of names) {
//     console.log(name)
// }
// console.log("Another way of displaying\n")
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// console.log(...names)

// const names = ["abdulla Khedr,", "Mustafa Ilmi," , "Mohamed Omar,"]
// console.log(names)
// //Add to the end
//
// names.push("Ibrahim Ullah")
// console.log("Push" , names)
//
// //Delete from the end
// names.pop()
// console.log("Pop" , names)
//
// //Add to the beginning
// names.unshift("Ahmed Al-Hayder")
// console.log("Unshif" , names)
//
// //Delete from the beginning
// names.shift()
// console.log("Shift" , names)
//
// names.sort()
// console.log("Sorted Array" , names)
//
// for (const name of names) {
//     console.log(name)
// }


//Arrow functions
//Function

// let anArray = [1,2,3,4 , "Ali" , "Omar" , [1.1,1.2 , 'A'], {name:'ali'}]
// console.log(anArray[6][1])
//
// let nums = [1,2,3,4,5,6]
//
// function display(numbers){
//     for (const num of numbers) {
//         console.log(num)
//     }
// }
//
// display(nums)

//
// let add = function (x, y, callFunction) {
//     let result = x + y;
//     callFunction(x,y,result);
// }
//
// let add =  (x, y, callFunction) => {
//     let result = x + y;
//     callFunction(x,y,result);
// }
//
// add(3, 6, (x,y,result) => console.log('The result is ' , result))
// add(3, 6, (x,y,result) => console.log('The score is ' , result))
//
// function multiply(x, y){
//     return x*y;
// }

let numbers = [1, 2, -3, -4, 5, 6, 7, -1]
numbers.forEach((num) => console.log(num))
let sum = numbers.reduce((acc, x) => acc + x)
let max = numbers.reduce((acc, x) => acc > x ? acc : x)
let min = numbers.reduce((acc, x) => acc < x ? acc : x)

console.log(`sum  = ${sum} , max = ${max} , min = ${min}`)

//filter
let allPositive = numbers.filter(x => x < 0)
console.log(`All Positve Numbers  , ${allPositive}`)

let mappedElements = numbers.map(x => x)
console.log(`mapped = ${mappedElements}`)

//map

//
//
// function addTwoNumbers(acc,x){
//     acc = acc + x ;
//     return acc
// }
// let acc=0;
// for (let i = 0; i < numbers.length; i++) {
//     acc = addTwoNumbers(acc , numbers[i])
// }
// console.log(acc)
//
//










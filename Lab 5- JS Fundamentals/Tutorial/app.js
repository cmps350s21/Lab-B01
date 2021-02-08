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

const names = ["abdulla Khedr,", "Mustafa Ilmi," , "Mohamed Omar,"]
console.log(names)
//Add to the end

names.push("Ibrahim Ullah")
console.log("Push" , names)

//Delete from the end
names.pop()
console.log("Pop" , names)

//Add to the beginning
names.unshift("Ahmed Al-Hayder")
console.log("Unshif" , names)

//Delete from the beginning
names.shift()
console.log("Shift" , names)

names.sort()
console.log("Sorted Array" , names)




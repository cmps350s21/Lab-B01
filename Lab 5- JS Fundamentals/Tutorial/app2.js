// //When you load a page
//
// //What is JS
// // JavaScript is a lightweight, interpreted programming language.
// // It is designed for creating network-centric applications.
// // It is complimentary to and integrated with Java.
// // JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.
//
// let x = 12
// let y = 12.5
// const z = 'text'
//
// x = 33
//
// console.log(y.toExponential(4))
//
//
//
// console.log(`x = ${++x} , y = ${typeof y} , z = ${typeof z}`)
// //Decision Making
//
// if (x > 20) console.log(`${x} is greater than 20`)
// else console.log(`${x} is not greater than 20`)
//
// //Loops
// for (let i = 0; i < 10; i++) {
//     console.log(i, '- itteration')
// }
//
// while (x > 0) {
//     console.log(x--)
// }
// do {
//     console.log(y--)
// } while (y > 0)
//
//
// //functions
// function display() {
//     console.log('Hello from function')
// }
//
// //Void
// function display() {
//     console.log('Hello from function')
// f}
//
// display()
//
// //returns a value
//
// function add(x, y) {
//     return x + y
// }
//
// console.log('The sum = ', add(2, 4))
//
// //Arrays
// const people = ['Abdulahi', 'Mohamed', 'Hassen', 'Yusuf', 'Ahmed']
//
// for (const person of people) {
//     console.log(person)
// }
//
// //Methods
//
// let joinedValues = people.join('  ')
// console.log(joinedValues)
//
// people.sort()
// console.log(people)
//
// people.push('Added to the end')  //adds value to the end
// console.log('After push', people)
// let value = people.pop()  //removes values from the end
// console.log('After pop', people, value)
//
// people.unshift(`Added to the beginning`) // add value from the beginning
// console.log('After unshift', people)
// value = people.shift()   //remove to the beginning
// console.log('After shift', people, value)
//

const numbers = [23, 14, 55, 66, 77, 77, 66]

//summation
function reduce(acc, curr) {
    return acc + curr;
}

//max
function reduce2(acc, curr) {
    console.log(`
        acc : ${acc}
        curr : ${curr}
    `)
    return acc + curr;
}

numbers.forEach(num => console.log(num))


























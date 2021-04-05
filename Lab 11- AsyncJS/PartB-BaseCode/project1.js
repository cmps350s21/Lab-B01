import fs from 'fs'
//Synchronous code. Change it to async using callback.
// let data = fs.readFileSync('data/student.json');
// console.log(JSON.parse(data));

/*
1.Convert this code to asynchronous form using a separate callback function (callBack).
2.Change the callback function to an anonymous one.
2.Take care of error handling in the callback function
*/

function callback(err, data) {
    if (!err) {
        console.log(JSON.parse(data))
    } else {
        console.log(err)
    }
}

fs.readFile('data/student.json', callback)
console.log('This is some other code that needs to be executed in your applicaiton')

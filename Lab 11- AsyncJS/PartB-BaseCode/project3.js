/*
1.Rewrite the you created in Part-1 using promises.
*/
//
// function callback(err, data) {
//     if (!err) {
//         console.log(JSON.parse(data))
//     } else {
//         console.log(err)
//     }
// }
//
// fs.readFile('data/student.json', callback)
// // console.log('This is some other code that needs to be executed in your applicaiton')

import fs from 'fs-extra'

fs.readJson('data/student.json')
    .then(students => console.log(students))
    .catch(err => console.log(err))


















// function readJson(filename) {
//     //reads data from the hard disk
//     return new Promise((resolve, reject) => {
//         try {
//             resolve('data')
//         } catch (err) {
//             reject(err)
//         }
//     })
// }
//
//
// readJson('xyz')
//     .then(message => console.log(message))
//     .catch(err => console.log('error happened' + err))

// function readFile(filename, callback) {
//     //i try to read the file
//     let data = filename
//     if (data)
//         callback(null, 'Here is the data')
//     else
//         callback('there was an error', null)
// }
// readFile('/data/students.json', (err, data) => {
//     if (!err)
//         console.log(data)
//     else
//         console.log(err)
// })

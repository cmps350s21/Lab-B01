/*
1.Rewrite the you created in Part-2 using promises.
*/
import fs from 'fs-extra'

// function readFileAndParse(filename, callback) {
//     fs.readFile(filename, (err, data) => {
//         if (err) callback(err, null)
//         else callback(null, JSON.parse(data))
//     })
// }
//
// function getCoursesWithInstructorName(cb) {
//     readFileAndParse('data/course.json', (err, courses) => {
//         if (!err) {
//             readFileAndParse('data/staff.json', (err, staffs) => {
//                 if (!err) {
//                     for (const course of courses) {
//                         const {firstname, lastname} = staffs.find(staff => staff.staffNo == course.instructorId)
//                         course.instructorName = `${firstname} ${lastname}`
//                     }
//                     cb(null, courses)
//
//                 } else {
//                     cb(err, null)
//                 }
//             })
//         } else cb(err, null)
//     })
// }
//
// getCoursesWithInstructorName((err, data) => {
//     if (!err) console.log(data)
//     else console.log(err)
// })

//courses
//use the id of the instructor and match it with the id
//of the staff inside the staff.json

fs.readJson('data/course.json')
    .then(courses => {
        return fs.readJson('data/staff.json')
            .then(staffs => {
                for (const course of courses) {
                    const {firstname, lastname} = staffs.find(staff => staff.staffNo == course.instructorId)
                    course.instructorName = `${firstname} ${lastname}`
                }
                return courses
            })
    })
    .then(cWithIName => console.log(cWithIName))
    .catch(err => console.log(err))
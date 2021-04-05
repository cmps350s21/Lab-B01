/*
1)	We need to read data from two files. course.json and staff.json. Both using callbacks.
2)	We need finally print all courses with their corresponding instructor names.
a)	Instructor name can be found at the staff file.
b)	Use staffNo in staff.json property to match the instructorId from course.json
3)	Create two functions getCourses and setInstructorNames.
function getCourses(cb)
	function setInstrctorNames(courses , cb)
4)	Instructor names are set as a new property to the course object in the setInstrctorNames function.
 */

//


import fs from 'fs'

function readFileAndParse(filename, callback) {
    fs.readFile(filename, (err, data) => {
        if (err) callback(err, null)
        else callback(null, JSON.parse(data))
    })
}

function getCoursesWithInstructorName(cb) {
    readFileAndParse('data/course.json', (err, courses) => {
        if (!err) {
            readFileAndParse('data/staff.json', (err, staffs) => {
                if (!err) {
                    for (const course of courses) {
                        const {firstname, lastname} = staffs.find(staff => staff.staffNo == course.instructorId)
                        course.instructorName = `${firstname} ${lastname}`
                    }
                    cb(null, courses)

                } else {
                    cb(err, null)
                }
            })
        } else cb(err, null)
    })
}

getCoursesWithInstructorName((err, data) => {
    if (!err) console.log(data)
    else console.log(err)
})






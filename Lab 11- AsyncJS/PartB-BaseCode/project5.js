import fs from 'fs-extra'
/*
1.Rewrite the you created in Part-4 using promises adding the number of students registered in each course.
{
    crn: 200,
    courseCode: 'GENG 200',
    courseName: 'Probability and Statistics for Engineers',
    semester: 'Fall 2016',
    instructorId: 12,
    instrctorName: 'Zeyad Ali',
    studentCount: 56
  },
*/

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
    .then(courses => {
        return fs.readJson('data/student.json')
            .then(students => {
                for (const course of courses) {
                    const regStudents = students.filter(student => student.courseIds.includes(course.crn))
                    course.studentCount = regStudents.length
                    course.students = regStudents.map(student => `${student.firstname} ${student.lastname}`)
                }
                return courses
            })
    })
    .then(courses => console.log(courses))
    .catch(err => console.log(err))
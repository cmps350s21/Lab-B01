/*
1.In project6.js :  Rewrite the code you created in project4.js using Async/await.
 */
import fs from 'fs-extra'

async function readCoursesWithInstructors(){
    try {
        const courses = await fs.readJson('data/course.json')
        const staffs = await fs.readJson('data/staff.json')
        for (const course of courses) {
            const {firstname, lastname} = staffs.find(staff => staff.staffNo == course.instructorId)
            course.instructorName = `${firstname} ${lastname}`
        }
        return courses
    }catch (err){
        return err
    }
}

readCoursesWithInstructors()
    .then(courses=>console.log(courses))


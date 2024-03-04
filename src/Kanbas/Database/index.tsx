import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json"
import users from "./users.json";
import enrollments from "./enrollments.json";
import grades from "./grades.json";

export  interface Courses{
    "_id": string,
    "name": string,
    "number": string,
    "startDate": string,
    "endDate": string,
    "image": string
}

export {courses, modules, assignments, users, enrollments, grades};

export default {courses, modules, assignments, users, enrollments, grades};


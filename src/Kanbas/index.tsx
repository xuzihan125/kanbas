import KanbasNavigation from "./Navigation";
import "./index.css"
import {Route, Routes, Navigate} from "react-router";
// import Labs from "../labs";
// import HelloWorld from "../labs/a3/HelloWorld";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import Db from "./Database";

function Kanbas() {

    const [courses, setCourses] = useState(Db.courses)
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "reactjs.png"
    });
    const addNewCourse = () => {
        const newCourse = { ...course,
            _id: new Date().getTime().toString() };
        setCourses([...courses, { ...course, ...newCourse }]);
    };

    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <div className="d-flex">
            <KanbasNavigation/>
            <div style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard  courses={courses}
                                                                course={course}
                                                                setCourse={setCourse}
                                                                addNewCourse={addNewCourse}
                                                                deleteCourse={deleteCourse}
                                                                updateCourse={updateCourse}
                    />} />
                    <Route path="Courses/:courseId/*" element={<Courses  courses={courses}/>} />
                </Routes>
                {/*<h1>Account</h1>*/}
                {/*<h1>Dashboard</h1>*/}
                {/*<h1>Courses</h1>*/}
            </div>
        </div>
    );}
export default Kanbas;

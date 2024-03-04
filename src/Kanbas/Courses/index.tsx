import Modules from "./Modules";
import Topbar from "./topbar";
import React from "react";
import CourseNavigation from "./Navigation";
import Assignments from "./Assignment";
import {Navigate, Route, Routes} from "react-router";
import Home from "./Home";
import AssignmentEditor from "./Assignment/Editor";
import Grades from "./Grades";
import {Courses} from "../Database";
import {useParams} from "react-router-dom";


function CoursesPage({courses}:{courses:Courses[]}) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div style={{"display": "flex", "flexBasis": "20%", "flexDirection": "column"}}>
            <Routes>
                <Route path="/:page/*" element={<Topbar/>}/>
            </Routes>
            <hr style={{width: "400%"}}/>
            <div style={{"display": "flex"}}>
                <CourseNavigation/>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{left: "320px", top: "100px"}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Home"/>}/>
                        <Route path="Home" element={<Home/>}/>
                        <Route path="Modules" element={<Modules/>}/>
                        <Route path="Piazza" element={<h1>Piazza</h1>}/>
                        <Route path="Assignments" element={<Assignments/>}/>
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<Grades/>}/>
                    </Routes>
                </div>

            </div>

        </div>

    )
}

export default CoursesPage;

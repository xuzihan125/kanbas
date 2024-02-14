import KanbasNavigation from "./Navigation";
import "./index.css"
import {Route, Routes, Navigate} from "react-router";
// import Labs from "../labs";
// import HelloWorld from "../labs/a3/HelloWorld";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation/>
            <div style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses/>} />
                </Routes>
                {/*<h1>Account</h1>*/}
                {/*<h1>Dashboard</h1>*/}
                {/*<h1>Courses</h1>*/}
            </div>
        </div>
    );}
export default Kanbas;

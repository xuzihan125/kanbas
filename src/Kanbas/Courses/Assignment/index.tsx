import React from "react";
import {FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "../general.css"

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <div className="module-header" style={{display: "flex", justifyContent: "space-between"}}>
                <input className="general-height" type="text" placeholder="Search for assignment" style={{
                    "marginRight": 'auto',
                }}/>
                <button className="btn btn-light custom-btn general-height">
                    <FaPlus/>
                    Group
                </button>
                <button className="btn custom-btn btn-danger general-height" >
                    <FaPlus/>
                    Assignment
                </button>
                <button className="btn btn-light custom-btn general-height">
                    <b>⋮</b>
                </button>
            </div>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </div>
    );}
export default Assignments;

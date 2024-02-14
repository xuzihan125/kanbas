import React, {useState} from "react";
import "./index.css";
import {modules} from "../../Database";
import {FaEllipsisV, FaCheckCircle, FaPlusCircle} from "react-icons/fa";
import {useParams} from "react-router";

function ModuleList() {
    const {courseId} = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    const customBtnStyle = {height: '35px'};
    const buttonDimensions = {width: '0.8cm', height: '35px'};

    // @ts-ignore
    return (
        <div>
            <div className="module-header">
                <button className="btn btn-light custom-btn" style={customBtnStyle}>Collapse All</button>
                <button className="btn btn-light custom-btn" style={{width: '4cm', ...customBtnStyle}}>View Progress
                </button>
                <select className="btn btn-light custom-btn" style={customBtnStyle}>
                    <option>Publish All</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <button className="btn btn-danger">
                    Module
                </button>
                <button className="btn btn-light custom-btn" style={buttonDimensions}>
                    <b>⋮</b>
                </button>
            </div>
            <hr/>
            <br/>
            <ul className="list-group wd-modules">
                {modulesList.map((module) => (
                    <React.Fragment>
                        <li
                            className="list-group-item list-group-item-light custom-grey-bg"
                            onClick={() => setSelectedModule(module)}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <FaEllipsisV className="me-2"/>
                                {module.name}
                                <span className="float-end">
                <FaCheckCircle className="text-success"/>
                <FaPlusCircle className="ms-2"/>
                <FaEllipsisV className="ms-2"/>
              </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group ms-3">
                                    {module.lessons?.map((lesson) => (
                                        <li className="list-group-item">
                                            <FaEllipsisV className="me-2"/>
                                            {lesson.name}
                                            <span className="float-end">
                      <FaCheckCircle className="text-success"/>
                      <FaEllipsisV className="ms-2"/>
                    </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}

export default ModuleList;

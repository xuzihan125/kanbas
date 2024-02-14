import ModuleList from "../Modules/List";
import React from "react";
import {FaCheck} from "react-icons/fa";
import "./index.css"

function Home() {
    const customBtnStyle = {height: '35px', margin:"10px", width:"100%"};

    return (
        <div className="row">
            <h2>Home</h2>
            <div style={{"display": "flex"}}>
                <div className="col-8">
                    <ModuleList />
                </div>
                <div className="col-2" style={{marginLeft:"20px"}}>
                    <button className="btn btn-light btn-sm btn-consistent-width" style={customBtnStyle}>Import Existing Content</button><br />
                    <button className="btn btn-light btn-sm btn-consistent-width" style={customBtnStyle}>Import From Commons</button><br />
                    <button className="btn btn-light btn-sm btn-consistent-width" style={customBtnStyle}>Choose Home Page</button><br />
                    <button className="btn btn-light btn-sm btn-consistent-width" style={customBtnStyle}>View Course Stream</button><br />
                    <button className="btn btn-light btn-sm btn-consistent-width" style={customBtnStyle}>New Announcement</button><br />
                    <button className="btn btn-light btn-sm btn-consistent-width" style={customBtnStyle}>New Analytics</button><br />
                    <button className="btn btn-light btn-sm btn-consistent-width" style={customBtnStyle}>View Course Notifications</button><br />
                    <br />
                    <h3>To do</h3>
                    <hr />
                    <div style={{display:"flex", alignItems: 'center'}}>
                        <FaCheck className="red" style={{}}/>
                        <div style={{marginLeft:"10px"}}>
                            <div className="red" style={{textDecoration: "underline"}}>
                                Grade A1 - ENV + HTML
                            </div>
                            Coming Up
                        </div>
                    </div>
                    <hr />
                    <div style={{display:"flex", alignItems: 'center'}}>
                        <FaCheck className="red" style={{}}/>
                        <div style={{marginLeft:"10px"}}>
                            <div className="red" style={{textDecoration: "underline"}}>
                                View Calendar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Home;

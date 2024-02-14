import "./index.css"
import {HiMiniBars3} from "react-icons/hi2";
import {useParams} from "react-router-dom";
import {courses} from "../../Database";

function Topbar() {
    let {courseId, page} = useParams();
    let course = courses.find(item => courseId === item._id)
    if(course === undefined){
        return (<div>Error course</div>)
    }



    return (
        <div className="center-container">
            <br/>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={{"backgroundColor": "transparent"}}>
                    <li className="breadcrumb-item">
                        <div style={{color: "red", "textDecoration": 'underline'}}>
                            <HiMiniBars3 style={{color: "black"}}/>
                            {course.number} {course._id}
                        </div>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page" style={{color: "black"}}>{page}</li>
                </ol>
            </nav>
        </div>
    )
}

export default Topbar;

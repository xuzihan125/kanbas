import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt } from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
        { label: "Courses",   icon: <FaBook className="fs-2" />           },
        { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            <li>
                <img src="/images/NEU.png" height="80px" width="80px"/>
            </li>
            {links.map((link, index) => (
                <li key={index}>
                    <Link to={`/Kanbas/${link.label}`} className={`list-group-item ${pathname.includes(link.label) && "active"}`}> {link.icon} <br/> {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;

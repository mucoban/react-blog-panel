import {Link} from "react-router-dom";

const Sidebar = () => {
    return (<div className="sidebar">
        <Link className="logo" to="/">React Admin Panel</Link>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pages">Pages</Link></li>
        </ul>
    </div>)
}

export default Sidebar

import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (<div className="navbar">
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
        <button className="btn btn-secondary" onClick={props.logout}>Logout</button>
    </div>)
}

export default Navbar

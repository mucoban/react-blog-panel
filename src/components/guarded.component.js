import {Navigate} from "react-router-dom";

const Guarded = ({ isLoggedIn, children }) => (isLoggedIn ? children : <Navigate to="/login" />)

export default Guarded


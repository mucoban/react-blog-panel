import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Navbar from "./components/navbar.component";
import Sidebar from "./components/sidebar.component";
import Guarded from "./components/guarded.component";
import LoginPage from "./pages/loginPage.component";
import HomePage from "./pages/homePage.component";
import Pages from "./pages/Pages.component";
import EditPage from "./pages/EditPage.component";
import {useState} from "react";

function App() {

    const [isLoggedIn, setisLoggedIn] = useState(true)

    const login = () => { setisLoggedIn(true) }
    const logout = () => { setisLoggedIn(false) }

    return (
    <div className="App">
     <BrowserRouter>
         <div className="wrapper">
             <Sidebar  />
             <div className="page-content">
                 <Navbar logout={logout} />
                 <div className="page-content-inner">
                     <Routes>
                         <Route path="/login" element={!isLoggedIn ? <LoginPage login={login} /> : <Navigate to="/" />} />
                         <Route path="/" element={<Guarded isLoggedIn={isLoggedIn}><HomePage /></Guarded>} />
                         <Route path="/pages" element={<Guarded isLoggedIn={isLoggedIn}><Pages /></Guarded>} />
                         <Route path="/pages/:id" element={<Guarded isLoggedIn={isLoggedIn}><EditPage /></Guarded>} />
                         <Route path="/pages/create" element={<Guarded isLoggedIn={isLoggedIn}><EditPage /></Guarded>} />
                     </Routes>
                 </div>
             </div>
         </div>
     </BrowserRouter>
    </div>
    );
}

export default App;

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component";
import LoginPage from "./pages/loginPage.component";
import HomePage from "./pages/homePage.component";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar.component";
import PagesComponent from "./pages/Pages.component";
import EditPage from "./pages/EditPage.component";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
         <div className="wrapper">
             <Sidebar  />
             <div className="page-content">
                 <Navbar />
                 <div className="page-content-inner">
                     <Routes>
                         <Route path="/login" element={<LoginPage />} />
                         <Route path="/" element={<HomePage />} />
                         <Route path="/pages" element={<PagesComponent />} />
                         <Route path="/pages/:id" element={<EditPage />} />
                         <Route path="/pages/create" element={<EditPage />} />
                     </Routes>
                 </div>
             </div>
         </div>
     </BrowserRouter>
    </div>
  );
}

export default App;

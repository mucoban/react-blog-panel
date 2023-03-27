import './App.css';
import Navbar from "./components/navbar.component";
import LoginPage from "./pages/loginPage.component";
import HomePage from "./pages/homePage.component";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyNavbar from './components/Navbar';
import Tracks from './pages/Tracks';
import Footer from './components/Footer';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from './pages/LoginForm';
import ModernNavbar from './components/ModernNavbar';



function App() {
  return (
    
    <div className="App">
      
      <ModernNavbar/>
      

    <Router>
      <div className="App">
        {/* Define routes */}
        <Routes>
          <Route path="/home" element={<HomePage/>} />  {/* Home page route */}
          <Route path="/about" element={<About/>} />  {/* Tracks page route */}
          <Route path="/tracks" element={<Tracks/>} />  {/* Tracks page route */}
          <Route path="/contact" element={<ContactUs/>} />  {/* Tracks page route */}
          <Route path="/login" element={<LoginForm/>} />  {/* Tracks page route */}
          <Route path="/join" element={<RegistrationForm/>} />  {/* Tracks page route */}
        </Routes>
      </div>
    </Router>
    
   
    <Footer/>
   
      
    </div>
  );
}

export default App;

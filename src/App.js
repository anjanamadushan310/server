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



function App() {
  return (
    
    <div className="App">
      <MyNavbar/> 
      <RegistrationForm/>

    <Router>
      <div className="App">
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<HomePage/>} />  {/* Home page route */}
          <Route path="" element={<Tracks/>} />  {/* Tracks page route */}
        </Routes>
      </div>
    </Router>
    <About/>
    <Tracks/>
    
    <ContactUs/>
    
    <Footer/>
   
      
      
    </div>
  );
}

export default App;

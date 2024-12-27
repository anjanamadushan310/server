import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

import Tracks from './pages/Tracks';
import Footer from './components/Footer';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ParticipentDashboard from  "./pages/ParticipantDashbord";

import ModernNavbar from './components/ModernNavbar';

import Join from './pages/Join';


import Login from './pages/Login';
import Registergit from './pages/Registergit';



function App() {
  return (
    
    <div className="App">
      
      <ModernNavbar/>
      
      

    <Router>
      <div className="App">
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<HomePage/>} />  {/* Home page route */}
          <Route path="/about" element={<About/>} />  {/* Tracks page route */}
          <Route path="/tracks" element={<Tracks/>} />  {/* Tracks page route */}
          <Route path="/contact" element={<ContactUs/>} />  {/* Tracks page route */}
          <Route path="/login" element={<Login/>} />  {/* Tracks page route */}
          <Route path="/join" element={<Join/>} />  {/* Tracks page route */}
          <Route path="/register" element={<Registergit/>} />  {/* Tracks page route */}
          <Route path="/participent" element={<ParticipentDashboard/>} />  {/* Tracks page route */}
        </Routes>
      </div>
    </Router>
    
   
    <Footer/>
   
      
    </div>
  );
}

export default App;

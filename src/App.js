import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TitleBar from './components/TitleBar';
import HomePage from './pages/HomePage';
import MyNavbar from './components/Navbar';
import Tracks from './pages/Tracks';
import Footer from './pages/Footer';



function App() {
  return (
    
    <div className="App">
      <MyNavbar/> 
      
        <Router>
      <div className="App">
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<HomePage/>} />  {/* Home page route */}
          <Route path="" element={<Tracks/>} />  {/* Tracks page route */}
        </Routes>
      </div>
    </Router>
    <Tracks/>
    <Footer/>
      
      
      
    </div>
  );
}

export default App;

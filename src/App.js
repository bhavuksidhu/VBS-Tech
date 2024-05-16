import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import SocialMedia from './Component/SocialMedia';
import ContactUs from './Component/ContactUs';
import Navbar from './Navbar/Navbar';
import Marketo from './Component/Marketo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* <Route path="/paidsearch" element={<PaidSearch />} /> */}
          {/* <Route path="/webdesign" element={<WebDesign />} />  */}
          <Route path="/merkto" element={<Marketo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

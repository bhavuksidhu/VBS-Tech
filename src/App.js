import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import SocialMedia from './Component/SocialMedia';
import ContactUs from './Component/ContactUs';
import Navbar from './Navbar/Navbar';
import Marketo from './Component/Marketo';
import Webdesign from './Component/Webdesign';
import PaidSearch from './Component/PaidSearch';
import Whatsapp from './Whatsapp/Whatsapp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/paidsearch" element={<PaidSearch />} />
          <Route path="/webdesign" element={<Webdesign />} /> 
          <Route path="/merkto" element={<Marketo/>} />
        </Routes>
      </Router>
      <Whatsapp/>
    </div>
  );
}

export default App;

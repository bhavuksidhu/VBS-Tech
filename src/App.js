import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import SocialMedia from './Component/SocialMedia';
import ContactUs from './Component/ContactUs';
import Navbar from './Navbar/Navbar';
import Marketo from './Component/Marketo';
import Webdesign from './Component/Webdesign';
import PaidSearch from './Component/PaidSearch';
import Webdevelopment from './Component/Webdevelopment';
import Mobiledevelop from './Component/Mobiledevelop';
import Webdesignn from './Component/Webdesignn';
import Ecommerce from './Component/Ecommerce';
import Digitalmarketing from './Component/Digitalmarketing';
import Graphicdesign from './Component/Graphicdesign';

import Whatsapp from './Whatsapp/Whatsapp';

function App() {
  const [nav, setNav] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar setNav={setNav} nav={nav} />
        <Routes>
          <Route path="/" element={<LandingPage setNav={setNav} nav={nav} />} />
          <Route path="/socialmedia" element={<SocialMedia  setNav={setNav} nav={nav} />} />
          <Route path="/contactus" element={<ContactUs setNav={setNav} nav={nav} />} />
          <Route path="/paidsearch" element={<PaidSearch  setNav={setNav} nav={nav}/>} />
          <Route path="/webdesign" element={<Webdesign  setNav={setNav} nav={nav}/>} /> 
          <Route path="/merkto" element={<Marketo  setNav={setNav} nav={nav}/>} />
          <Route path="/webdevelopment" element={<Webdevelopment/>} />
          <Route path="/mobileappdevelopment" element={<Mobiledevelop/>} />
          <Route path="/webdesignn" element={<Webdesignn/>} />
          <Route path="/ecommerce" element={<Ecommerce/>} />
          <Route path="/digitalmarketing" element={<Digitalmarketing/>} />
          <Route path="/graphicdesign" element={<Graphicdesign/>} />
        </Routes>
      </Router>
      <Whatsapp/>
    </div>
  );
}

export default App;

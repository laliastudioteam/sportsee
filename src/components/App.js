import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import Header from './Header'
import Sidebar from './Sidebar'

// Pages
import Home from '../pages/Home'
import Account from '../pages/Account'
import Reglages from '../pages/Reglages'
import Communaute from '../pages/Communaute'
import Unknown from '../pages/Unknown'

import '../styles/App.css'
const fakeData = 1;

function App() {
  return (
    <React.StrictMode>
      <div>
 
          <Router>
            <Header />
            <div className="main-container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/home/:id" element={<Home />} />
              <Route path="/account" element={<Account />} />
              <Route path="/reglages" element={<Reglages />} />
              <Route path="/communaute" element={<Communaute />} />
              <Route path="*" element={<Unknown />} />
            </Routes>
            </div>
          </Router>
      </div>
    </React.StrictMode>
  )
}

export default App;

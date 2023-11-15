import React from 'react';
import Navbar from './components/Navbar';

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Examples from './pages/Examples'
import Owasp1 from './pages/Intern/Owasp1';
import Owasp2 from './pages/Intern/Owasp2';
import Owasp3 from './pages/Intern/Owasp3';
import Owasp4 from './pages/Intern/Owasp4';
import Owasp5 from './pages/Intern/Owasp5';
import Owasp6 from './pages/Intern/Owasp6';
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/examples' element={<Examples />} />
        <Route path='/owasp/owasp1' element={<Owasp1 />} />
        <Route path='/owasp/owasp2' element={<Owasp2 />} />
        <Route path='/owasp/owasp3' element={<Owasp3 />} />
        <Route path='/owasp/owasp4' element={<Owasp4 />} />
        <Route path='/owasp/owasp5' element={<Owasp5 />} />
        <Route path='/owasp/owasp6' element={<Owasp6 />} />
      </Routes>
    </>
  )
}

export default App;

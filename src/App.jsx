import React from 'react';
import Navbar from './components/Navbar';

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Examples from './pages/Examples'
function App() {
  return (
    <>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/examples' element={<Examples />} />
      </Routes>
    </>
  )
}

export default App;

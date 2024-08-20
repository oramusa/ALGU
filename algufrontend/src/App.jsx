import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Solutions from './pages/Solutions'
import Home from './pages/Home';
import Cloud from './pages/Cloud';

function App() {
  

  return (
    <>
      
     <Router>
     
     <Navbar />
        <Routes>
   
       <Route path='/' element={<Home/>}/>
       <Route path="/solutions" element={<Solutions />} />
          <Route path='/cloud'  element={<Cloud/>}/>
        
        </Routes>
 
  
    </Router>
  
    </>
     
  )
}

export default App

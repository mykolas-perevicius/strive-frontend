// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import { Button } from "@/components/ui/button"
import {LandingComponent}  from './components/component/landing-component'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingComponent />} /> 
        {/* Add more routes if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App

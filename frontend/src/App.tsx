// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import { Button } from "@/components/ui/button"
import {LandingComponent}  from '@/components/component/landing-component'
import {WeightliftingDashboard} from '@/components/component/weightlifting-dashboard'
import {RunningDashboard} from '@/components/component/running-dashboard'
import {MinicutDashboard} from '@/components/component/minicut-dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingComponent />} /> 
        <Route path="/weightlifting" element={<WeightliftingDashboard />} />
        <Route path="/running" element={<RunningDashboard />} />
        <Route path="/minicut" element={<MinicutDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home'
import TrainDashboard from './screens/TrainDashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/:TrainID'} element={<TrainDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
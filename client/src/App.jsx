/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login'
import Home from './screens/Home'
import TrainDashboard from './screens/TrainDashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/home'} element={<Home />} />
        <Route path={'/home/:TrainID'} element={<TrainDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashbord from './Pages/Dashbord'
import LoginPage from './Pages/LoginPage'
import Register from './Pages/Register'
export const backend_url = import.meta.env.VITE_BACKEND_URL
const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
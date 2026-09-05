import React from 'react'
import { Toaster } from "sonner";
import { Route, Routes } from 'react-router-dom'
import Dashbord from './Pages/Dashbord'
import LoginPage from './Pages/LoginPage'
import Register from './Pages/Register'
import MiddleComponent from './Components/MiddleComponent'
import ProctectedRoute from './Components/ProctectedRoute'
import ComputerAssigned from './Components/ComputerAssigned'
import ModernMiddleComp from './Components/ModernMiddleComp';
import RegisterComputer from './Components/RegisterComputer';

export const backend_url = import.meta.env.VITE_BACKEND_URL

const App = () => {

  return (
    <div>

      <Toaster
        position='top-center'
        closeButton
        duration={5000}
      />

      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<LoginPage />} />


        {/* DASHBOARD */}
        <Route
          path="/dashbord"
          element={
            <ProctectedRoute>
              <Dashbord />
            </ProctectedRoute>
          }
        >
          <Route index element={<MiddleComponent />} />
          <Route path="employees" element={<ModernMiddleComp />} />
          <Route path="computerassign" element={<ComputerAssigned />} />
          <Route path="registercomputer" element={<RegisterComputer />} />

        </Route>


        {/* REGISTER */}
        <Route path="/register" element={<Register />} />

      </Routes>

    </div>
  )
}

export default App
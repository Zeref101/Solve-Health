import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StudentDashboard from './StudentDashboard'
import PrescriptionHistory from './PrescriptionHistory'
import DoctorDetails from './DoctorDetails'
import Ambulance from './Ambulance'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<StudentDashboard></StudentDashboard>}></Route>
        <Route path="/ph" element={<PrescriptionHistory></PrescriptionHistory>}></Route>
        <Route path="/doc" element={<DoctorDetails></DoctorDetails>}></Route>
        <Route path="/ambu" element={<Ambulance></Ambulance>}></Route>
      </Routes>
  )
}

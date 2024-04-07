import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StudentDashboard from './StudentDashboard'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<StudentDashboard></StudentDashboard>}></Route>
      </Routes>
  )
}

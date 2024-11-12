import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Page/Home'
import Lisen from './components/Lisen/Lisen'
import Project from './components/Project/Project'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/lisen" element={<Lisen />} />
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  )
}
export default App

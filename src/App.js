import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Page/Home'
import Lisen from './components/Lisen/Lisen'
import Proyect from './components/Proyect/Proyect'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/lisen" element={<Lisen />} />
        <Route path="/" element={<Home />} />
        <Route path="/proyect" element={<Proyect />} />
      </Routes>
    </Router>
  )
}
export default App

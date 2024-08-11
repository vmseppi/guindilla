import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./components/Home/Page/Home";
import Lisen from "./components/Lisen/Lisen";

function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/lisen" element={<Lisen />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
   
  );
}
export default App;

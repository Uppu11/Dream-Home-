import React, { useState, useEffect } from "react";

import './App.css';
import { Login } from "./login";
import { Signup } from "./signup";
import Home from "./components/home";
import BookAppointment from './components/Bookappointment';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookAppointment" element={<BookAppointment />} />
      </Routes>
    </Router>

  );
}

export default App;








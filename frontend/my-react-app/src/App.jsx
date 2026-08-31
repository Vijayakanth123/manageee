import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './login';
import Signup from './signup';
import './App.css'


function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to App</h2>
      <Link to="/login"><button style={{ marginRight: '10px' }}>Login</button></Link>
      <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  );
}

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Comunity from './pages/Comunity';
import Respis from './pages/Respis';

function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Comunity" element={<Comunity />} />
          <Route path="Respis" element={<Respis />} />
        </Route>
      </Routes>
    
  );
}
export default App;
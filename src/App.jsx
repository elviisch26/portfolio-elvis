import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import './index.css'
import { CurriculumVitae } from './pages/CurriculumVitae';
import { QuienSoy } from './pages/QuienSoy';
import { Proyectos } from './pages/Proyectos';
import { Educacion } from './pages/Educacion';
import { Conocimientos } from './pages/Conocimientos';
import { Experiencia } from './pages/Experiencia';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/curriculum_vitae" element={<CurriculumVitae />} />
        <Route path="/quien-soy" element={<QuienSoy />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path="/conocimientos" element={<Conocimientos />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="*" element={<h1 className='text-center text-dark mt-5'>Not found!</h1>} />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react';
import Acerca from './components/Acerca';
import Navbar from './components/Navbar';
import Tareas from './components/Tareas';
import Lab from './components/Lab';
import Contacto from './components/Contacto';
import { Route, Routes } from 'react-router-dom'

import Tarea1Ramon from './tareas/Tarea1Ramon';

const Index = () => {
  return (
    <div className='container-fluid px-0'>
      <img className='img-fluid w-100' src="bg.jpg" alt="IBERO"></img>
      <div className='container'>
        <h1 className='pt-3'>Inicio</h1>
      </div>
    </div>
  );
}


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/acerca-de-mi' element={<Acerca />} />
        <Route path='/tareas' element={<Tareas />} />
        <Route path='/laboratorio' element={<Lab />} />
        <Route path='/contacto' element={<Contacto />} />

        {/* Tareas */}
        <Route path='/tareas/1/Ramon' element={<Tarea1Ramon />} />
      </Routes>
    </>
  );
}

export default App;

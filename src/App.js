import React from 'react';
import Navbar from './components/Navbar';
import Tareas from './components/Tareas';
import Lab from './components/Lab';
import ProyectoFinal from './components/ProyectoFinal';
import { Route, Routes } from 'react-router-dom'

import Tarea1Ramon from './tareas/Tarea1Ramon';
import Tarea2Ramon from './tareas/Tarea2Ramon';

const acercaAbraham = "Mi nombre es Abraham, actualmente estoy estudiando en la Universidad Ibero Puebla la carrera de Ingeniería en Sistemas Computacionales. Soy una persona apasionada por la programación, me encanta pasar horas frente a la computadora creando nuevos proyectos y resolviendo problemas. Uno de mis hobbies favoritos son los videojuegos, me gusta jugar en línea con amigos y conocer nuevas personas a través de esta actividad. Además, también me gusta el futbol y disfruto mucho ver partidos y jugar con amigos en mi tiempo libre. Estoy enfocado en continuar aprendiendo y mejorando mis habilidades en la programación para poder crear soluciones innovadoras en el futuro."

const Acerca = (props) => {
  return (
    <div className="card text-bg-dark col-12 col-md-11 col-lg-10 px-0 mb-4">
      <div className="row g-0">
        <div className="col-md-9 p-lg-4 p-3">
          <h2>{props.name}</h2>
          <p>{props.about}</p>
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid rounded-end w-100"
            style={{ objectFit: "cover", maxHeight: "40vh" }}
            src={props.img}
            alt="IBERO"
          ></img>
        </div>
      </div>
    </div>
  );
}
const Index = () => {
  return (
    <div className='container-fluid px-0'>
      <div className='position-relative'>
        <img className='img-fluid w-100' src="bg.jpg" alt="IBERO"></img>
        <div className="position-absolute top-50 start-50 translate-middle h-100 w-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} ></div>
        <div className='position-absolute top-50 start-50 translate-middle h1'>
          Redes Digitales
        </div>
      </div>
      <div className='container'>
        <div className='row my-3 mx-1  mx-md-0 my-md-5 justify-content-center'>
          <Acerca name="Abraham" about={acercaAbraham} img="abraham.jpg" />
          <Acerca name="Ramón" about="Lorem ipsum dolor..." img="ramon.jpg" />
        </div>
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
        <Route path='/tareas' element={<Tareas />} />
        <Route path='/laboratorio' element={<Lab />} />
        <Route path='/proyecto-final' element={<ProyectoFinal />} />

        {/* Tareas */}
        <Route path='/tareas/1/Ramon' element={<Tarea1Ramon />} />
        <Route path='/tareas/2/Ramon' element={<Tarea2Ramon />} />
      </Routes>
    </>
  );
}

export default App;

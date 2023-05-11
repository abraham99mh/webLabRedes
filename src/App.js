import React from "react";
import Navbar from "./components/Navbar";
import Tareas from "./components/Tareas";
import Lab from "./components/Lab";
import ProyectoFinal from "./components/ProyectoFinal";
import { Route, Routes, useLocation } from "react-router-dom";

import Tarea1Ramon from "./tareas/Tarea1Ramon";
import Tarea2Ramon from "./tareas/Tarea2Ramon";

const acercaAbraham =
  "Mi nombre es Abraham, actualmente estoy estudiando en la Universidad Ibero Puebla la carrera de Ingeniería en Sistemas Computacionales. Me gusta la programación, pasando horas frente a la computadora creando nuevos proyectos y resolviendo problemas. Uno de mis hobbies favoritos son los videojuegos, me gusta jugar en línea con amigos y además, también me gusta el futbol y disfruto mucho ver partidos.";
const acercaRamon =
  "Mi nombre es Ramón y actualmente estudio Ingeniería Electrónica en la misma universidad que tú, la Universidad Ibero Puebla. Me apasiona todo lo relacionado con la electrónica y estoy emocionado de aprender todo lo que pueda sobre esta carrera. Además, uno de mis pasatiempos favoritos es comer tacos, siempre estoy en busca de nuevos lugares para probar diferentes tipos de tacos.";
const acercaKaryme =
  "Mi nombre es Karyme Anette, actualmente estoy estudiando Ing. Mecatrónica en la Universidad Ibero Puebla, desde chica me a gustado mucho armar cosas y entender los diferentes componentes de los aparatos, me parece muy interesante desarrollar la capacidad de hacer el dispositivo que sea necesario en cualquier situación, me encantan los datos interesantes, las anécdotas y explorar nuevos lugares en la naturaleza.";

const Acerca = (props) => {
  return (
    <div className="card text-bg-dark col-12 col-md-11 col-lg-10 px-0 mb-4">
      <div className="row g-0">
        <div className="col-md-9 p-lg-4 p-3">
          <h4 className="text-xl mb-2">{props.name}</h4>
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
};
const Index = () => {
  return (
    <div className="container-fluid px-0 pb-1 bg-slate-600">
      <div className="position-relative">
        <img className="img-fluid w-100" src="bg.jpg" alt="IBERO"></img>
        <div
          className="position-absolute top-50 start-50 translate-middle h-100 w-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="position-absolute top-50 start-50 translate-middle h1 text-white">
          Redes Digitales
        </div>
      </div>
      <div className="container">
        <div className="row my-3 mx-1  mx-md-0 my-md-5 justify-content-center">
          <Acerca name="Abraham" about={acercaAbraham} img="abraham.jpg" />
          <Acerca name="Ramón" about={acercaRamon} img="ramon.jpg" />
          <Acerca name="Karyme" about={acercaKaryme} img="karyme.jpg" />
        </div>
      </div>
    </div>
  );
};

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/proyecto-final";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/laboratorio" element={<Lab />} />
        <Route path="/proyecto-final" element={<ProyectoFinal />} />

        {/* Tareas */}
        <Route path="/tareas/1/Ramon" element={<Tarea1Ramon />} />
        <Route path="/tareas/2/Ramon" element={<Tarea2Ramon />} />
      </Routes>
    </>
  );
}

export default App;

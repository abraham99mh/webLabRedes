import React, { useState } from "react";
import InicioDeSesion from "./InicioDeSesion";

//Clase para las cards
let cardClass = "card p-8 bg-slate-700";

//Componente del dashboard
const Dashboard = () => {
  return (
    <div className="bg-slate-800 py-12 text-white min-h-screen">
      <span className="flex justify-center font-bold text-5xl">DASHBOARD</span>
      <div className="grid grid-cols-2 gap-11 mx-auto px-28 mt-10">
        {/* Card de temperatura */}
        <div className={cardClass}>
          <div className="text-2xl font-extrabold">
            Temperatura
            <div className="flex justify-center mt-2">
              <div className="rounded-md h-52 w-56 flex justify-center items-center gradient-animation circles hover:scale-110 ease-out duration-300">
                <span className="pl-3 text-6xl">45°</span>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        {/* Card de presión atmosférica  */}
        <div className={cardClass}>
          <div className="text-2xl font-extrabold">
            Presión Atmosférica
            <div className="flex justify-center mt-2">
              <div className="rounded-md h-52 w-56 flex justify-center items-center gradient-animation2 squares hover:scale-110 ease-out duration-300">
                <span className="pl-3 text-6xl">0 hPa</span>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        {/* Card de humedad relativa  */}
        <div className={cardClass}>
          <div className="text-2xl font-extrabold">
            Humedad Relativa
            <div className="flex justify-center mt-2">
              <div className="rounded-md h-52 w-56 flex justify-center items-center gradient-animation3 squares hover:scale-110 ease-out duration-300">
                <span className="pl-3 text-6xl">54%</span>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        {/* Card de humedad del suelo  */}
        <div className={cardClass}>
          <div className="text-2xl font-extrabold">
            Humedad del suelo
            <div className="flex justify-center mt-2">
              <div className="rounded-md h-52 w-56 flex justify-center items-center gradient-animation4 circles hover:scale-110 ease-out duration-300">
                <span className="pl-3 text-6xl">20%</span>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//Componente principal
const ProyectoFinal = () => {
  const [session, setSession] = useState(false); // Estado para controlar si el usuario ha iniciado sesión o no

  return (
    <>
      {session ? <Dashboard /> : <InicioDeSesion setSession={setSession} />}
      {/* Si el usuario ha iniciado sesión, muestra el componente Dashboard, sino muestra el componente InicioDeSesion */}
    </>
  );
};

export default ProyectoFinal;

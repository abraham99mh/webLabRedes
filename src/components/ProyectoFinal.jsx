import React, { useState, useEffect } from "react";
import InicioDeSesion from "./InicioDeSesion";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

//Clase para las cards
let cardClass = "card p-8 bg-slate-700 col-span-2 md:col-span-1";

//Componente del dashboard
const Dashboard = () => {
  const [data, setData] = useState([]);

  const dbRef = collection(db, "dashboard");

  useEffect(() => {
    const unsub = onSnapshot(doc(dbRef, "data"), (doc) => {
      setData(doc.data());
    });
    return unsub;
  }, [dbRef]);

  return (
    <div className="bg-slate-800 py-12 text-white min-h-screen">
      <span className="flex justify-center font-bold text-5xl">DASHBOARD</span>
      <div className="grid grid-cols-2 gap-6 md:gap-11 mx-auto px-6 sm:px-28 mt-10">
        {/* Card de temperatura */}
        <div className={cardClass}>
          <div className="text-2xl font-extrabold">
            Temperatura
            <div className="flex justify-center mt-2">
              <div className="rounded-md h-52 w-56 flex justify-center items-center gradient-animation circles hover:scale-110 ease-out duration-300">
                <span className="pl-3 text-6xl">{data.temperatura}°</span>
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
                <span className="pl-3 text-6xl">{data.presion} hPa</span>
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
                <span className="pl-3 text-6xl">{data.h_relativa}%</span>
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
                <span className="pl-3 text-6xl">{data.h_suelo}%</span>
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

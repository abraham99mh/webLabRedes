import React, { useState, useEffect } from "react";
import InicioDeSesion from "./InicioDeSesion";
// import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import Esp from "./Esp";

//Componente del dashboard
const Dashboard = () => {
  const [op, setOp] = useState(0);

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);

  const [state, setState] = useState(false);

  const dbRef = ref(db);

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      const resp = snapshot.val();

      const r1 = {
        temperatura: resp.temperatura,
        h_relativa: resp.h_relativa,
        h_suelo: resp.h_suelo,
        presion: resp.presion,
      };
      setData(r1);

      const r2 = {
        temperatura: resp.temperatura2,
        h_relativa: resp.h_relativa2,
        h_suelo: resp.h_suelo2,
        presion: resp.presion2,
      };
      setData2(r2);
      const r3 = {
        temperatura: resp.temperatura3,
        h_relativa: resp.h_relativa3,
        h_suelo: resp.h_suelo3,
        presion: resp.presion3,
      };
      setData3(r3);
      const r4 = {
        temperatura: resp.temperatura4,
        h_relativa: resp.h_relativa4,
        h_suelo: resp.h_suelo4,
        presion: resp.presion4,
      };
      setData4(r4);
    });
  }, [data.presion, data.presion2, data.presion3, data.presion4, dbRef, state]);

  useEffect(() => {
    setTimeout(() => {
      setState(!state);
    }, 5000);
  }, [state]);

  return (
    <>
      <div className="bg-slate-800 py-12 text-white min-h-screen">
        {op === 0 ? (
          <Esp data={data} type={"A"} />
        ) : op === 1 ? (
          <Esp data={data2} type={"B"} />
        ) : op === 2 ? (
          <Esp data={data3} type={"C"} />
        ) : op === 3 ? (
          <Esp data={data4} type={"D"} />
        ) : null}
      </div>
      <div className="btm-nav">
        <button
          className={`text-white text-2xl ${
            op === 0 ? "active font-bold" : ""
          }`}
          onClick={() => setOp(0)}
        >
          A
        </button>
        <button
          className={`text-white text-2xl ${
            op === 1 ? "active font-bold" : ""
          }`}
          onClick={() => setOp(1)}
        >
          B
        </button>
        <button
          className={`text-white text-2xl ${
            op === 2 ? "active font-bold" : ""
          }`}
          onClick={() => setOp(2)}
        >
          C
        </button>
        <button
          className={`text-white text-2xl ${
            op === 3 ? "active font-bold" : ""
          }`}
          onClick={() => setOp(3)}
        >
          D
        </button>
      </div>
    </>
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

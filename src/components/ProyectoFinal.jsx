import React from "react";

let cardClass = "card p-8 bg-slate-700 hover:scale-105 ease-out duration-300";

const ProyectoFinal = () => {
  return (
    <div className="bg-slate-800 py-12 text-white min-h-screen">
      <span className="flex justify-center font-bold text-4xl">DASHBOARD</span>
      <div className="grid grid-cols-2 gap-11 mx-auto px-28 mt-10">
        <div className={cardClass}>
          <div className="text-2xl font-extrabold">
            Temperatura
            <div className="flex justify-center mt-2">
              <div className="rounded-md h-52 w-56 flex justify-center items-center gradient-animation">
                <span className="pl-3 text-6xl">45°</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cardClass}>
          <div className="">Wolaasdasda</div>
        </div>
        <div className={cardClass}>
          <div className="">Wolaasdasda</div>
        </div>
        <div className={cardClass}>
          <div className="">Wolaasdasda</div>
        </div>
      </div>
    </div>
  );
};

export default ProyectoFinal;

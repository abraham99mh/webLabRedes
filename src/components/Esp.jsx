import React from "react";

const Esp = (props) => {
  //Clase para las cards
  let cardClass = "card p-8 bg-slate-700 col-span-2 md:col-span-1";

  console.log(props.data);
  const p = props.data.presion;
  const presion = p ? p.toFixed(2) : 0;

  return (
    <>
      <span className="flex justify-center font-bold text-5xl">DASHBOARD</span>
      <div className="grid grid-cols-2 gap-6 md:gap-11 mx-auto px-6 sm:px-28 mt-10 mb-10">
        {/* Card de temperatura */}
        <div className={cardClass}>
          <div className="text-2xl font-extrabold">
            Temperatura
            <div className="flex justify-center mt-2">
              <div className="rounded-md h-52 w-56 flex justify-center items-center gradient-animation circles hover:scale-110 ease-out duration-300">
                <span className="pl-3 text-6xl">{props.data.temperatura}°</span>
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
                <span className="pl-6 text-5xl">{presion} hPa</span>
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
                <span className="pl-3 text-6xl">{props.data.h_relativa}%</span>
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
                <span className="pl-3 text-6xl">{props.data.h_suelo}%</span>
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
    </>
  );
};

export default Esp;

import React from "react";
import TableItem from "./TableItem";

const Tareas = () => {
  return (
    <div className="container bg-slate-600 min-w-full px-12 pb-10">
      <h1 className="pt-3 text-white text-3xl mb-4">Tareas</h1>
      <div className="lg:mx-20">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hecha por</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <TableItem num="1" alumno="Ramón" link="/tareas/1/Ramon" />
            <tr>
              <th scope="row">1</th>
              <td>Karime</td>
              <td>
                <a
                  className="btn btn-error lg:btn-sm"
                  href="tarea1Karime/index.html"
                >
                  Tarea
                </a>
              </td>
            </tr>
            <TableItem num="2" alumno="Ramón" link="/tareas/2/Ramon" />
            <tr>
              <th scope="row">2</th>
              <td>Karime</td>
              <td>
                <a
                  className="btn btn-error lg:btn-sm"
                  href="tarea2Karime/index.html"
                >
                  Tarea
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Ramon</td>
              <td>
                <a className="btn btn-error lg:btn-sm" href="tarea3Ramon.html">
                  Tarea
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Karime</td>
              <td>
                <a
                  className="btn btn-error lg:btn-sm"
                  href="tarea3Karime/index.html"
                >
                  Tarea
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Ambos</td>
              <td>
                <a
                  className="btn btn-error lg:btn-sm"
                  href="tarea4/Tarea4.html"
                >
                  Tarea
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Ambos</td>
              <td>
                <a className="btn btn-error lg:btn-sm" href="tarea5/index.html">
                  Tarea
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Ambos</td>
              <td>
                <a
                  className="btn btn-error lg:btn-sm"
                  href="tarea6/Tarea6.html"
                >
                  Tarea
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Ambos</td>
              <td>
                <a
                  className="btn btn-error lg:btn-sm"
                  href="tarea7/Tarea7.html"
                >
                  Tarea
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Ambos</td>
              <td>
                <a
                  className="btn btn-error lg:btn-sm"
                  href="tarea9/Tarea9.html"
                >
                  Tarea
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hecha por</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td className="font-bold uppercase">Examen 1 - Ambos</td>
              <td>
                <a
                  className="btn btn-warning lg:btn-sm"
                  href="Examen redes digitales 2023.pdf"
                >
                  EXAMEN
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tareas;

import React from 'react';
import TableItem from './TableItem';

const Tareas = () => {

    return ( 
        <div className='container'>
            <h2 className='pt-3'>Tareas</h2>
            <div className='card bg-dark'>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Hecha por</th>
                        <th scope="col">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableItem num="1" alumno="Ramón" link="/tareas/1/Ramon"/>
                        <tr>
                            <th scope="row">1</th>
                            <td>Karime</td>
                            <td><a className='btn btn-danger' href="tarea1Karime/index.html">Tarea</a></td>
                        </tr> 
                        <TableItem num="2" alumno="Ramón" link="/tareas/2/Ramon"/>
                        <tr>
                            <th scope="row">2</th>
                            <td>Karime</td>
                            <td><a className='btn btn-danger' href="tarea2Karime/index.html">Tarea</a></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ramon</td>
                            <td><a className='btn btn-danger' href="tarea3Ramon.html">Tarea</a></td>
                        </tr>   
                        <tr>
                            <th scope="row">3</th>
                            <td>Karime</td>
                            <td><a className='btn btn-danger' href="tarea3Karime/index.html">Tarea</a></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Ambos</td>
                            <td><a className='btn btn-danger' href="tarea4/Tarea4.html">Tarea</a></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Ambos</td>
                            <td><a className='btn btn-danger' href="tarea5/index.html">Tarea</a></td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default Tareas;
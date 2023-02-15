import React from 'react';
import TableItem from './TableItem';

const Tareas = () => {

    return ( 
        <div className='container'>
            <h2 className='pt-3'>Tareas</h2>
            <div>
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
                        <TableItem num="1" alumno="Karime" link="/tareas/1/Karime"/>
                        <TableItem num="2" alumno="Ramón" link="/tareas/2/Ramon"/>
                        <TableItem num="2" alumno="Karime" link="/tareas/2/Karime"/>
                        <TableItem num="3" alumno="Ramón" link="/tareas/3/Ramon"/>
                        <TableItem num="3" alumno="Karime" link="/tareas/3/Karime"/>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default Tareas;
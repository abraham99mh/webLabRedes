import React from 'react';
import { Link } from 'react-router-dom';


const TableItem = (props) => {
    return (
    <tr>
        <th scope="row">{props.num}</th>
        <td>{props.alumno}</td>
        <td><Link className='btn btn-danger' to={props.link}>Tarea</Link></td>
    </tr>     
    );
}
 
export default TableItem;
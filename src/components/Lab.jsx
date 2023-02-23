import React from 'react';
 const Lab = () => {
    return ( 
        <div className='container'>
            <h2 className='pt-3'>Prácticas Laboratorio</h2>
            <h5 className='pt-3'>Luis Abraham Meléndez Hernández</h5>
            <h5 className='py-3'>Ramón Alberto Romero Salazar</h5>
            <div>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Páctica 1</th>
                            <td><a className='btn btn-danger' href="practicas/Practica1.docx">Descargar</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Páctica 2</th>
                            <td><a className='btn btn-danger' href="practicas/Practica2.docx">Descargar</a></td>
                        </tr>   
                        <tr>
                            <th scope="row">Páctica 5</th>
                            <td><a className='btn btn-danger' href="practicas/Practica5.docx">Descargar</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
 }
  
 export default Lab;
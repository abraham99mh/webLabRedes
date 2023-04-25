import React from 'react';
 const Lab = () => {
    return ( 
        <div className='container text-white bg-slate-600 min-w-full px-12 pb-32'>
            <h2 className='pt-3 text-3xl'>Prácticas Laboratorio</h2>
            <h5 className='pt-3 text-lg'>Luis Abraham Meléndez Hernández</h5>
            <h5 className='py-3 mb-4 text-lg'>Ramón Alberto Romero Salazar</h5>
            <div className='lg:mx-20'>
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
                            <td><a className='btn btn-error lg:btn-sm' href="practicas/Practica1.docx">Descargar</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Páctica 2</th>
                            <td><a className='btn btn-error lg:btn-sm' href="practicas/Practica2.docx">Descargar</a></td>
                        </tr>   
                        <tr>
                            <th scope="row">Páctica 5</th>
                            <td><a className='btn btn-error lg:btn-sm' href="practicas/Practica5.docx">Descargar</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
 }
  
 export default Lab;
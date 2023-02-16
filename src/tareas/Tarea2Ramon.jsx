import React from 'react'

const Tarea2Ramon = () => {

    const data = '<!-- Logo --> <table width ="100%" bgcolor="white"> <tr><!-- Fila --> <td width ="10%"></td> <td width ="15%"> <img src="/imagenes/logo1.png" width="50%"> </td> <td width ="15%" > <img src="/imagenes/logo1.png" width="50%"></td> <td width ="10%"></td> </table> </table> <!-- Tabla 1 --> <table width ="100%" border="1" bgcolor="white"> <tr> <td width ="20%"></td> <td width ="10%"> <p style= "color: black; text-align: center; "> <a href="/paginas/inicio.html">Inicio </p></a> </td> <td width ="10%"> <p style="color: black; text-align: center;"> <a href="/paginas/acerca.html"> Acerca de mi </a></p></td> <td width ="10%"> <p style="color: black; text-align: center;"> <a href="/paginas/tarea.html">Tareas Redes </a></p></td> <td width ="10%"> <p style="color: black; text-align: center;"> <a href="/paginas/lab.html">Laboratorio </a></p></td> <td width ="10%"> <p style="color: black; text-align: center;"> <a href="/paginas/contacto.html">Contacto </a> </p></td> <td width ="20%"></td> </tr> <table width ="100%" bgcolor="white"> <img src="/imagenes/im1.jpg" width="100%"> <tr> <td width ="20%"></td> <td width ="20%" > <img src="/imagenes/i1.png" width="100%"></td> <td width ="20%" bgcolor="red"> <p > <h2 style="text-align: center;"> Tarea 1</h2> Lorem ipsum dolor sit amet. Est consequatur aspernatur aut iure temporibus 33 reprehenderit modi et accusantium iure. <h3> </h3></p> </td> <td width ="20%"></td> </tr> <tr> <td width ="20%"></td> <td width ="20%" > <img src="/imagenes/i2.png" width="100%"></td> <td width ="20%" bgcolor="red"> <p > <h2 style="text-align: center;"> Tarea 2</h2> Lorem ipsum dolor sit amet. Est consequatur aspernatur aut iure temporibus 33 reprehenderit modi et accusantium iure. <h3> </h3></p> </td> <td width ="20%"></td> </tr> </table> <table width ="100%" bgcolor="red"> <tr> <td width ="50%" > <p style="color: black;">Derechos reservados 2023 </p> </td> </tr> </table>'

    return ( 
    <>
        <div dangerouslySetInnerHTML={{__html: data}}></div>        
    </> );
}
 
export default Tarea2Ramon;
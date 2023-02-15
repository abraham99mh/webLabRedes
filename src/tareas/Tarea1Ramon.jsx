import React from 'react'

const Tarea1Ramon = () => {

    const data = '<p> Hola mundo </p><!-- Tabla 1 --><table width ="100%" bgcolor="red"><tr><!-- Fila --><td width ="20%"></td><td width ="10%" > <p style="color: white;">Alumnos </p></td> <td width ="10%"> <p style="color: white;">Egresado</p></td> <td width ="10%"> <p style="color: white;">Comunidad</p></td> <td width ="10%"> <p style="color: white;">International</p></td> <td width ="10%"> <p style="color: white;">Noticias</p></td> <td width ="10%"> <p style="color: white;">Accesos </p</td> <td width ="20%"></td> </tr> </table> <!-- Tabla 2 --> <table width ="100%" bgcolor="white"> <tr> <td width ="20%"></td> <td width ="10%" > <img src="/imagenes/logo1.png" width="100%"></img></td> <td width ="10%"> <p style="color: black;" >LA IBERO </p></td> <td width ="10%"> <p style="color: black;">OFERTA ACADEMICA</p></td> <td width ="10%"> <p style="color: black;">ADMISIONES</p></td> <td width ="10%"> <p style="color: black;">VIDA ESTUDIANTIL</p></td> <td width ="10%"> <p style="color: black;">INVESTIGACIÓN</p</td> <td width ="20%"></td> </tr> </table> <img src="/imagenes/im1.jpg" width="100%"> <p style="text-align:center"> ENCUENTRA TU MEJOR OPCIOÓN </p> <p > El papel de la Universidad no estaría completo si no tomara en cuenta la excelencia académica, que busca la actualización y formación de sus profesores, y el mejoramiento de sus recursos. </p> <table width ="100%"> <tr> <td width ="20"></td> <td width ="20%"> <img src="/imagenes/i1.png" width="25%"> </td> <td width ="20%"> <img src="/imagenes/i2.png" width="25%"> </td> <td width ="20%"> <img src="/imagenes/i3.png" width="25%"> </td> <td width ="20%"></td> </tr> <tr> <td width ="20%"></td> <td width ="20%"> <img src="/imagenes/i4.png" width="25%"> </td> <td width ="20%"> <img src="/imagenes/i5.png" width="25%"> </td> <td width ="20%"> <img src="/imagenes/i6.png" width="25%"> </td> <td width ="20%"></td> </tr> </table>'

    return ( 
    <>
        <div dangerouslySetInnerHTML={{__html: data}}></div>        
    </> );
}
 
export default Tarea1Ramon;
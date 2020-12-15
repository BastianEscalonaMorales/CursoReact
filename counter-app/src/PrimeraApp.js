import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {

    /*const saludo = {
        nombre: 'bastian',
        edad: 20444
    }
    */
 /* 
    if (!saludo){
       throw new Error ('El saludo es necesario');
   }
*/
    return( 
        <>      
            <h1> {subtitulo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{saludo}</p>
        </>
    



     );



}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired

}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'


}

export default PrimeraApp;


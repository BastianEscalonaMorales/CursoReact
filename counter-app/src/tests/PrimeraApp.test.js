import React from 'react';
import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <primeraApp/> ', () => {
    test('Debe de mostrar el mensaje "hola, soy io"', () => {
        const saludo = 'hola, soy io';
        
        const {getByText} = render (<PrimeraApp saludo = {saludo}/>)
  
        expect(getByText(saludo)).toBeInTheDocument();
    
    })
    
})

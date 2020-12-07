

const persona = {
    nombre: 'bastian',
    apellido: 'Escalona',
    edad: 25,
    dirrecion:{
        ciudad: 'santa cruz',
        lat: 14.3232,
        lng: 34.9233321
    }
}

console.table( {
    persona
});

const persona2 = {...persona}; //Para clonar las propiedades del objeto.
persona2.nombre = 'PETER '
console.table( {
    persona2
});
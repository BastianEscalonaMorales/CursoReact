
//desestructuracion
//asignacion desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman'
}
//
//const {nombre,edad,clave} = persona;


//console.log(nombre);
//console.log(edad);
//console.log(clave);

const useContext = ({clave,nombre,edad}) =>{
    return {
        nombreClave: clave,
        anios:edad,
        latlng: {
            lat: 14.116,
            lng: -12.3232
        }
    }
}
const {nombreClave,anios, latlng:{lat,lng}} = useContext(persona)

console.log(nombreClave,anios);
console.log(lat,lng)
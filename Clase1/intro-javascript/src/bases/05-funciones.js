
//Funciones en JS

const saludar = function (nombre){
    return ` hola,  ${nombre}`
}

const saludar2 =  (nombre) =>{
    return ` hola,  ${nombre}`
}

const saludar3 =  (nombre) => ` hola,  ${nombre}`;

const saludar4 = () =>` hola mundo`;


console.log( saludar);


const getUser = () => ({
        uid: 'ABCD123',
        username: 'EL_PAPI123123'
    
})

const getUsuarioActivo = (nombre) => ({
        uid: 'ABCD123',
        username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');

console.log(usuarioActivo);

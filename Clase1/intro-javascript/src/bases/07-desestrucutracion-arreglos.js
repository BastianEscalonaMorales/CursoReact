
//Desestructuracion de arreglos

const personajes = ['bastian','loreto','teamu'];


//const [,p2] = personajes;

//console.log(p2);

const retornaArreglo = () =>{
    return ['abc',123];
}

const [letras , numeros] = retornaArreglo();

console.log(letras,numeros);

const asd = (nombre) =>{
    return [nombre, ()=>{console.log('Hola Mundo')}];

}

const [nombre, setNombre] = asd('Goku');

console.log(nombre);
setNombre();
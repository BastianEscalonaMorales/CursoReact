

const nombre = 'Bastian'
const apellido = 'Escalona'

const nombreCompleto = ` ${nombre} ${apellido} `  

console.log(nombreCompleto)
//////       `  `

function getSaludo(nombre){
    return 'hola ' + nombre;
}

console.log( `  este es un texto: ${ getSaludo(nombre)}`)
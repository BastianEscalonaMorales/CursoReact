import { getHeroesById, getHeroesByOwner } from './bases/08-import-export';
/*
const promesa = new Promise((resolve,reject) => {

    setTimeout(() => {
        const heroe = getHeroesById(2);
        resolve( heroe)
    }, 2000);
} );

promesa.then( (heroe) => {
    console.log('heroe', heroe);
})
.catch( err => console.warn(err));

*/

const getHeroesByIdAsync = (id) => {

    const promesa = new Promise((resolve,reject) => {

        setTimeout(() => {
            const heroe = getHeroesById(id);
            if(heroe){
                resolve( heroe)
            }else reject('No se pudo encontrar el heroe')

        }, 2000);
    } );

    return promesa;

}

getHeroesByIdAsync(2)
.then(console.log)
.catch(console.warn)

import {heroes} from '../data/heroes';



const getHeroesById = (id) => {
    return heroes.find((heroes) => heroes.id === id)
}



console.log(getHeroesById(2))

const getHeroesByOwner = (owner) => {
    return heroes.filter((hero) => (hero.owner ===owner));
}

console.log(getHeroesByOwner('DC'))


import {heroes} from '../data/heroes';



export const getHeroesById = (id) => {
    return heroes.find((heroes) => heroes.id === id)
}



export const getHeroesByOwner = (owner) => {
    return heroes.filter((hero) => (hero.owner ===owner));
}

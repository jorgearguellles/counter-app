// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import {heroes} from '../data/heroes';

// Find one hero by a props, lik ID
export const getHeroById = (id) => heroes.find( (hero) => hero.id === id );

// return heroes list by a filter prop, like owner
export const getHeroesByOwner = ( owner ) => heroes.filter( (hero) => hero.owner === owner );




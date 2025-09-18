import {type Hero, heroes, Owner } from '../data/heroes-data';

const getHeroeById = (id: number): Hero | undefined => {
    return heroes.find( heroe => heroe.id === id);
}

console.log(getHeroeById(2));

//EJERCICIO 
export const getHeroesByOwner = (owner: Owner): Hero[] =>{
    return heroes.filter( heroe => heroe.owner === owner);
} 
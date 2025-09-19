import './style.css'
import './bases/03-objetos-literales-interfaces'
import './bases/04-arrays'
import './bases/05-functions'
import './bases/06-obj-destructuring'
import './bases/07-arrays-destructuring'
import './bases/08-imp-exp'
import './bases/09-promises'
import './bases/10-fetch-api'
//EJERCICIO
import { getHeroesByOwner } from './bases/08-imp-exp'
import { Owner } from './data/heroes-data'
console.log(getHeroesByOwner(Owner.DC));



document.querySelector<HTMLDivElement>('#app')!.innerHTML = 
`
  <div>
    <h1>Hola Mundo </h1>
  </div>
`
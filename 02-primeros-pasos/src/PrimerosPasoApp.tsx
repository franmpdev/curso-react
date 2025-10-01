
import { ItemCounter } from './shopping-cart/ItemCounter'

export function PrimerosPasosApp(){
    return (
    <>    
        <h1>Hola Mundo!!</h1>
        <p>Esto es un parrafo</p>
        <button>Click me</button>
        <div>
        <h2>Hola dentro de un div</h2>
        </div>
        <ItemCounter itemName="Nintendo Switch 2"></ItemCounter>
        <ItemCounter itemName="PlayStation 5"></ItemCounter>
        <ItemCounter itemName="Xbox Series X"></ItemCounter>
        </>

    )
}
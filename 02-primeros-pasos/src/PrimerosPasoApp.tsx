
import { ItemCounter } from './shopping-cart/ItemCounter'

interface ItemInCart{
    name: string;
    quantity: number;
}
const itemsInCart: ItemInCart[] = [
    {
        name: 'Nintendo Switch',
        quantity: 1
    },
    {
        name: 'PlayStation 5',
        quantity: 2
    },
    {
        name: 'Xbox Series X',
        quantity: 5
    },
    {
        name: 'Nintendo Switch 2',
        quantity: 3
    },
]

export function PrimerosPasosApp(){
    return (
    <>    
        <h1>Hola Mundo!!</h1>
        <p>Esto es un parrafo</p>
        <button>Click me</button>
        <div>
        <h2>Hola dentro de un div</h2>
        </div>
        {/*
        <ItemCounter itemName="Nintendo Switch 2"></ItemCounter>
        <ItemCounter itemName="PlayStation 5"></ItemCounter>
        <ItemCounter itemName="Xbox Series X"></ItemCounter>

        */}
        {
            itemsInCart.map(item => (
                <ItemCounter key={item.name} itemName={item.name} quantity={item.quantity}></ItemCounter>
            ))
        }

        </>

    )
}
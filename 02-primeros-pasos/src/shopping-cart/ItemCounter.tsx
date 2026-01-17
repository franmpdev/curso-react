import { useState } from "react"
import { CustomButton } from "../components/CustomButton"


import './ItemCounter.css'

interface Props{
    itemName: string;
    quantity: number;
}
export const ItemCounter = ({itemName, quantity}: Props)=> {

    const [count, setCount] = useState(quantity)
    const increaseCount = ()=>{
        setCount(count + 1)
    }
    const decreaseCount = ()=>{
        if(count <= 0) return;
        setCount(count-1);
    }

    return (
        <section className="item-row">
            <h3>{itemName}</h3>
            <CustomButton message="-" customClick={decreaseCount} backgroundColor="gray"/> 
            <p>{count}</p>
            <CustomButton message="+" customClick={increaseCount} backgroundColor="skyblue"/>
        </section>
    ) 
}
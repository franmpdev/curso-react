import { useState, type CSSProperties } from "react"
import { CustomButton } from "../components/CustomButton"


interface Props{
    itemName: string;
    quantity: number;
}
export const ItemCounter = ({itemName, quantity}: Props)=> {
    const cssSection: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        marginTop: '20px'
    }
    const [count, setCount] = useState(quantity)
    const increaseCount = ()=>{
        setCount(count + 1)
    }
    const decreaseCount = ()=>{
        setCount(count-1);
    }

    return (
        <section style={cssSection}>
            <h3>{itemName}</h3>
            <CustomButton message="-" click={decreaseCount} backgroundColor="gray"/> 
            <p>{count}</p>
            <CustomButton message="+" click={increaseCount} backgroundColor="skyblue"/>
        </section>
    ) 
}
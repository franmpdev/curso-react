import { useState, type CSSProperties } from "react"
import { CustomButton } from "../components/CustomButton"

export const ItemCounter = ()=> {
    const cssSection: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        marginTop: '20px'
    }
    const [count, setCount] = useState(1)
    return (
        <section style={cssSection}>
            <h3>Nintendo switch 2</h3>
            <CustomButton /> 
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <CustomButton />
        </section>
    ) 
}
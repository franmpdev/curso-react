import type { CSSProperties } from "react"

export function CustomButton (){
    const cssButton: CSSProperties = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    }
    return (
        <>
            <button style={cssButton} onClick={() => console.log('click')}>Click Me!</button>
        </>
    )
}
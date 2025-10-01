import type { CSSProperties } from "react"
interface Props{
    message: string;
    click: ()=> void;
    backgroundColor?: string;
}
export function CustomButton ({message, click, backgroundColor}: Props){
    const cssButton: CSSProperties = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: backgroundColor ?? 'white',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    }
    return (
        <>
            <button style={cssButton} onClick={() => {click()}}>{message}</button>
        </>
    )
}
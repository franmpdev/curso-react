
import type { CSSProperties } from "react"
interface Props{
    message: string;
    customClick: ()=> void;
    backgroundColor?: string;
}
export function CustomButton ({message, customClick, backgroundColor}: Props){
    const cssButton: CSSProperties = {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: backgroundColor ?? 'white',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    }
    return <button style={cssButton} onClick={() => {customClick()}}>{message}</button>
}
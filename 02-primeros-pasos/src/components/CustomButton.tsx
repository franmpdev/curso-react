// ¡Genial! He aprendido a reutilizar componentes en React.
// Este CustomButton es flexible: acepta mensaje, función de clic y color opcional.
// Lo uso en ItemCounter para botones de + y -, pasando funciones personalizadas.
// Esto evita código duplicado y hace el código más mantenible.

import type { CSSProperties } from "react"
interface Props{
    message: string;
    customClick: ()=> void;
    backgroundColor?: string;
}
export function CustomButton ({message, customClick, backgroundColor}: Props){
    const cssButton: CSSProperties = {
        padding: '5px 10px',
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
            <button style={cssButton} onClick={() => {customClick()}}>{message}</button>
        </>
    )
}
import type { CSSProperties } from "react";

export function MyAwesomeApp(){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const name = 'Francisco';
    const lastName = 'Moreno';
    const favGames: string[] = ['Pokemon', 'Mario Kart', 'Zelda']
    const isActive: boolean = true;
    const address = {
        zipCode: 'ABC-123',
        city: 'Madrid'
    }

    const myStyles: CSSProperties = {
        color: isActive? 'green' : 'red',
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign: 'center'
    }
    return (
        <>
            <h1>Ejercicio de componente realizado</h1>
            <h2 style={myStyles}> {name} {lastName}</h2>
            <p>{favGames.join(', ')}</p>
            <h1>{isActive ? 'Active' : 'Inactive'}</h1>
            <p>{JSON.stringify(address)}</p>
        </>
    )
}
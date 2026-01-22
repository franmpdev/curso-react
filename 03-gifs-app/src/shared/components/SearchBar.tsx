import React, { useEffect, useState } from 'react'
import { CustomButton } from './CustomButton'

interface Props{
    onQuery: (query: string) => void;
    placeholder : string;
}

export const SearchBar = ({placeholder = "Buscar", onQuery   /* Establecer valor por defecto*/}: Props) => {


    const [search, setSearch] = useState("")

    //EJECUTA LA FUNCIÓN DE BUSCAR 0.7 SEGUNDOS DESPUÉS DE DEJAR DE ESCRIBIR 
    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            //APRENDO QUE CADA TIMEOUT TIENE UN ID CON EL QUE SE PUEDE CANCELAR LA EJECUCIÓN
            console.log(timeoutId)
            onQuery(search)
        }, 700)
        return () =>{
            
            clearTimeout(timeoutId)
        } 
    }, [search, onQuery])

    function buscar(){
        onQuery(search)
        setSearch("")
    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setSearch(event.target.value)
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === "Enter"){
            buscar()
        }
    }
    return (
        <div className="search-container">
            <input type="text" placeholder={placeholder} value={search} onChange={handleChange} onKeyDown={handleKeyDown} />
            <CustomButton message="Buscar" customClick={buscar} backgroundColor='limegreen'  />     
        </div>
    )
}

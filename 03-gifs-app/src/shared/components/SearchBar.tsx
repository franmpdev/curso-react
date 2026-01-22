import React from 'react'
import { CustomButton } from './CustomButton'

interface Props{
    placeholder: string;
}

export const SearchBar = ({placeholder ="Buscar" /* Establecer valor por defecto*/}: Props) => {
    function buscar(){

    }
    return (
        <div className="search-container">
            <input type="text" placeholder={placeholder} />
            <CustomButton message="Buscar" customClick={buscar} backgroundColor='limegreen'  />     
        </div>
    )
}

import React from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifsList } from './gifs/components/GifsList'

const GifsApp = () => {
  return (
    <>
        <CustomHeader 
        title="Buscador de Gifs" 
        description="Tu buscador de gifs de confianza"
        />

        {/*Crear componente SearchBar*/}

        <SearchBar placeholder='Buscador general'/>

        {/*Crear componente PreviousSearches*/}

        <PreviousSearches/>
        
        {/*Crear componente GifList: Props => gifs: Gif[]*/}

        <GifsList gifs={mockGifs}/>
    </>
  )
}

export default GifsApp
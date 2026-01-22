import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifsList } from './gifs/components/GifsList'

const GifsApp = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searches, setSearches] = useState(['dragon ball z', 'freezer'])
  const handleSearchClick = (search: string) =>{
    console.log({search})
  }
  const controladorSearches = (query: string) => {
    console.log({query})
  }
  return (
    <>
        <CustomHeader 
        title="Buscador de Gifs" 
        description="Tu buscador de gifs de confianza"
        />

        {/*Crear componente SearchBar*/}

        <SearchBar onQuery={controladorSearches} placeholder='Buscador general'/>

        {/*Crear componente PreviousSearches*/}

        <PreviousSearches searches={searches} onLabelClicked={handleSearchClick}/>
        
        {/*Crear componente GifList: Props => gifs: Gif[]*/}

        <GifsList gifs={mockGifs}/>
    </>
  )
}

export default GifsApp
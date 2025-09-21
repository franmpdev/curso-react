import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerosPasosApp } from './PrimerosPasoApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimerosPasosApp/>
  </StrictMode>,
)

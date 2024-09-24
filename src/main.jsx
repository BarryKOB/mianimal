import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Appgrid from './Appgrid.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appgrid/>
  </StrictMode>,
)

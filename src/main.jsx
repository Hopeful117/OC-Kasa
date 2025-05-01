import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { LogementProvider } from './assets/context/LogementContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <LogementProvider>
    <App />
    </LogementProvider>
    
    </BrowserRouter>
   
  </StrictMode>,
)

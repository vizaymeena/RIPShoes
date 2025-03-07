import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Bootstrap imported
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

// Browser Router Imported
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)

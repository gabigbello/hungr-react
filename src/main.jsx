import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
<BrowserRouter>
  <StoreContextProvider>
    <App />  
  </StoreContextProvider>
</BrowserRouter>
=======
  <BrowserRouter>
  <StoreContextProvider>
    <App />  
  </StoreContextProvider>
  </BrowserRouter>
>>>>>>> c0bebb376d5934a6a5b21a718cdfdd6a8349cff0
)

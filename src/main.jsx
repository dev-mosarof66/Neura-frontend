import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './route.jsx'
import Provider from './context/Provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <Router />
    </Provider>
  </StrictMode>,
)

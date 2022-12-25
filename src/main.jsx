import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { FiltrosProvider } from './context/FiltrosProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltrosProvider>
      <App />
    </FiltrosProvider>
  </React.StrictMode>,
)

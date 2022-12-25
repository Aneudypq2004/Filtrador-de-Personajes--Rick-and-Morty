import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltrosProvider } from './components/FiltrosProvider'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltrosProvider>
      <App />
    </FiltrosProvider>
  </React.StrictMode>,
)

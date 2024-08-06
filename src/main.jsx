import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopeConextProvider from './Context/ShopeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ShopeConextProvider><App /></ShopeConextProvider>
  
  </React.StrictMode>,
)

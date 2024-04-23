import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const center = [22.5726, 88.3639];
const zoom = 13;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App center={center} zoom={zoom} />
  </React.StrictMode>,
)

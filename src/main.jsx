import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // на дипломе будут спрашивать (в этот див будет рендериться наше приложение
  // точка входа)
)

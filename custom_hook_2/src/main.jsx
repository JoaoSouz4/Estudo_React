import React from 'react'
import ReactDOM from 'react-dom/client'
import './global-styles.css';
import { Home } from '../src/templates/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

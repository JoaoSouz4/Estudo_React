import React from 'react'
import ReactDOM from 'react-dom/client'
import  App  from './components/app/index';
import { Home } from '../src/templates/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

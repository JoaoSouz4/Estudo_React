import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import GlobalStyle from './components/styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AppContextProvider } from './context/appContext.tsx'
import GlobalStyles from './components/GlobalStyles.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <GlobalStyles/>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
)

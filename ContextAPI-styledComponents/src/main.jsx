import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './routes/home';
import App from './app';
import ContextProvider from './context/context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './routes/error';
import Post from './routes/posts';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/posts',
        element: <Post/>
      }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<App/>}/>
          </Routes>
        </BrowserRouter> */}
        <ContextProvider>
          <RouterProvider router = {router}/>
        </ContextProvider> 
    </React.StrictMode>
  
);

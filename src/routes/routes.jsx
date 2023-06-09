import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import Index from './Index.jsx';
import Login from './Login.jsx';
import Cadastrar from './Cadastrar.jsx';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/index',
        element: <Index />,
      },
      {
        path: '/cadastrar',
        element: <Cadastrar />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
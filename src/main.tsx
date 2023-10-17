import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './screens/Home/index.tsx'
import About from './screens/About/index.tsx'
import Contact from './screens/Contact/index.tsx'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   </React.StrictMode>,
)

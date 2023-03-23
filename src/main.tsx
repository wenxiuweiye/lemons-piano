import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import ErrorPage from './error-page'
import PianoRoute from './route/PianoRoute'
import GetStartRoute from './route/GetStartRoute'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"#piano",
        element:<PianoRoute></PianoRoute>
      },
      {
        path:"#getStart",
        element:<GetStartRoute></GetStartRoute>
      }
    ]
  }
])

root.render(
  <RouterProvider router={router}></RouterProvider>
)







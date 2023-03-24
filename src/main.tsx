import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import ErrorPage from './error-page'
import GetStartRoute from './routes/pianoRoute/GetStart'
import Music from './routes/musicRoute'
import Piano from './components/piano'
import PianoRoute from './routes/pianoRoute'
import LearnMusic from './routes/pianoRoute/LearnMusic'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/piano",
        element:<PianoRoute></PianoRoute>,
        children:[
          {
            path:"#piano",
            element:<Piano></Piano>
          },
          {
            path:"#getStart",
            element:<GetStartRoute></GetStartRoute>
          },
          {
            path:"#learnMusic",
            element:<LearnMusic></LearnMusic>
          }
        ]
      },
      {
        path:"/music",
        element:<Music></Music>
      }
    ]
  }
])

root.render(
  <RouterProvider router={router}></RouterProvider>
)







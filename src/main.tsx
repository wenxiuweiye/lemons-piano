import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
export { render }
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

function render(){
  root.render(
      <App />
  )
}

render()






import { Link, useNavigate } from 'react-router-dom'
import './App.css'
import pianoLogo from '@/assets/pianoLogo.png'
import { useCallback,MouseEventHandler } from 'react'
import PianoRoute from './route/PianoRoute'
import {scroller,Element} from 'react-scroll'
import GetStartRoute from './route/GetStartRoute'

function App() {
  const navigate = useNavigate()

  const clk:MouseEventHandler<HTMLButtonElement> =(e)=>{
    const location = e.currentTarget.dataset.location
    console.log(location);
    
    navigate(`#${location}`)
    scroller.scrollTo(`${location}`,{
      duration: 1500,
      offset: 50,
      delay: 100,
      smooth: true,
    })
  }

  const click = useCallback(clk,[])
  
  return (
    <div className="App flex  flex-col space-y-20 justify-center items-center">
      <div className='flex  flex-col justify-center items-center space-y-8 font-sans'>
        <Link to={`/`}><img src={pianoLogo}></img></Link>
        <h1 className=' text-5xl font-bold '>lemons-piano</h1>
        <h2 className=' text-xl text-gray-400'>An out-of-the-box react piano component</h2>
        <div className=' space-x-5'>
          <button data-location='getStart' onClick={click}>GET START</button>
          <button data-location='piano' className=' text-gray-700 bg-yellow-300'onClick={click} >TRY CLICK</button>
        </div>
      </div>
      <Element name='piano'><PianoRoute></PianoRoute></Element>
      <Element name='getStart'><GetStartRoute></GetStartRoute></Element>
    </div>
  )
}

export default App

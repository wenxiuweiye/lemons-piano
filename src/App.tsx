import { Link, Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import pianoLogo from '@/assets/pianoLogo.png'
import { useCallback, MouseEventHandler, useEffect } from 'react'
import { scroller, Element } from 'react-scroll'
function App() {
  const navigate = useNavigate()
  const clk: MouseEventHandler<HTMLButtonElement> = (e) => {
    const location = e.currentTarget.dataset.location
    navigate(`/piano/#${location}`)
    scroller.scrollTo(`${location}`, {
      duration: 1500,
      offset: 50,
      delay: 100,
      smooth: true,
    })
  }

  useEffect(() => {
    const hashLocation = location.hash
    const pathloaction = location.pathname
    if (pathloaction !== '/') {
      if (hashLocation) {
        navigate(`${pathloaction}/${hashLocation}`)
        scroller.scrollTo(hashLocation.slice(1), {
          duration: 1500,
          offset: 50,
          delay: 100,
          smooth: true,
        })
      } else {
        navigate(`${pathloaction}`)
      }
    } else {
      navigate("/piano")
    }


  }, [])

  const click = useCallback(clk, [])

  return (


    <div className="  w-screen flex  flex-col space-y-20 justify-center items-center">
      {/**
       * footer
       */}
      <div className='flex  flex-col justify-center items-center space-y-8 font-sans'>
        <Link to={`/piano`} className='logo'><img src={pianoLogo}></img></Link>
        <h1 className=' text-5xl font-bold '>lemons-piano</h1>

        <h2 className=' text-xl text-gray-400'>An out-of-the-box react piano component</h2>
        <div className=' space-x-5'>
          <button data-location='getStart' onClick={click}>GET START</button>
          <button data-location='piano' className=' text-gray-700 bg-yellow-300' onClick={click} >TRY CLICK</button>
        </div>
      </div>


      {/**
        * main
        */}
      <Outlet></Outlet>

      {/**
       * footer
       */}
      <hr className=' w-4/5 border-gray-700'></hr>
      <div className=' text-base  text-gray-700 flex-col flex items-center justify-center p-5 lg:space-x-5 lg:flex-row lg:justify-around'>
        <div>
          <a className=" transition-all  font-bold hover:text-yellow-300" href="https://github.com/wenxiuweiye/">@wenxiuweiye</a>
        </div>
        <div className=" flex justify-center items-center flex-col lg:flex-row lg:space-x-5">
          <a className='flex justify-center items-center' href='https://www.npmjs.com/package/lemons-piano'>
            <svg version="1.1"
              className=" transition-all w-10 h-10 fill-gray-700 hover:fill-red-600"
              id="npm"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 780 250"  >
              <path className="st0" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z
                        M0,200h100V50h50v150h50V0H0V200z"/>
            </svg>
          </a>
          <a className='flex  justify-center  items-center' href='https://github.com/wenxiuweiye/lemons-piano/'>
            <svg className=" w-10 h-10 fill-gray-700 transition-all hover:fill-white" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App

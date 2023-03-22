import './App.css'
import Piano from './components/piano'
import pianoLogo from '@/assets/pianoLogo.png'


function App() {
  return (
    <div className="App">
      <p style={{textAlign:"center"}}>
        <img src={pianoLogo}></img>
        <h1 style={{textAlign:"center"}}>lemons-piano</h1>
      </p>
      <Piano></Piano>
    </div>
  )
}

export default App

import pianoLogo from '@/assets/pianoLogo.png'
import { Link } from 'react-router-dom'
export default function ErrorPage(){
    return (
        <div className=' flex flex-col justify-center items-center space-y-8'>
            <Link to={`/`}><img src={pianoLogo}></img></Link>
            <h1 className=' text-5xl font-bold '>404 FUND NOT</h1>
            <h2 className=' text-xl text-gray-400'>
                <div>Sorry not to find the resource you need</div>
                <div>You can click the icon to return to the home page</div>
            </h2>
        </div>
    )
}
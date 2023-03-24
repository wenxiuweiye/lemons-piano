import { useNavigate} from 'react-router-dom'
export default function LearnMusic(){
    const navigate = useNavigate()
    return(
        <div className="flex justify-center flex-col items-center space-y-5 w-full">
            <h2 className=' text-2xl font-bold '>可能您不懂任何乐理</h2>
            <div>别担心，这个文档也许能够帮助您</div>
            <button className='  hover:text-gray-700 font-bold  hover:bg-yellow-300' onClick={()=>{navigate("/music")}}>LEMONS MUSIC</button>
        </div>
    )
}
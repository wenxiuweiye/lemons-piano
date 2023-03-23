export default function GetStartRoute(){
    return(
        <div className=' flex flex-col justify-center items-center space-y-8'>
        <h2 className=' text-2xl font-bold '>📦安装</h2>
        <div className=' bg-gray-700 w-96  p-5 flex justify-center items-center'>
          <code>
            npm  install <div className=' text-yellow-300 inline-block'>lemons-piano</div>
          </code>
        </div>

        <h2 className=' text-2xl font-bold '>🔨用法</h2>
        <div>
          <code className='bg-gray-700 w-96 p-5  flex flex-col justify-center items-start'>
            <div className=' text-green-400' >//引入组件</div>
            import Piano from 'lemons-piano'
            
            <div className=' text-green-400' >//引入组件所使用的样式</div>
            import 'lemons-piano/dist/style.css'
          </code>
        </div>
      </div>
    )
}
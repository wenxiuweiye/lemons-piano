export default function GetStartRoute() {
    return (
        <div className=' flex flex-col justify-center items-center space-y-8 lg:w-2/3 '>
            <h2 className=' text-2xl font-bold '>📦安装</h2>
            <code className=' bg-gray-700 w-full  p-5 flex justify-center items-center'>
                <div><div className=' text-yellow-300 inline-block'>npm</div>&nbsp;install&nbsp;lemons-piano</div>
            </code>


            <h2 className=' text-2xl font-bold '>🔨用法</h2>
            <code className='bg-gray-700 w-full  p-5  flex flex-col justify-center items-start'>
                <div className=' text-green-600' >//引入组件</div>
                <div>import Piano from 'lemons-piano'</div>

                <div className=' text-green-600' >//引入组件所使用的样式</div>
                <div>import 'lemons-piano/dist/style.css'</div>
            </code>

            <code className='bg-gray-700 w-full p-5  flex flex-col justify-center items-start'>
                <div><div className=" inline-block text-blue-400">function</div> <div className=" inline-block text-yellow-300">App</div> <div className=" inline-block text-yellow-400">()</div> {`{`} </div>
                <div>&emsp;&emsp;return{`(`}</div>
                <div>&emsp;&emsp;&emsp;&emsp;&lt;div className="App"&gt;</div>
                <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;<div className=" inline-block text-green-400">Piano</div>&gt;&lt;/<div className=" inline-block text-green-400">Piano</div>&gt;</div>
                <div>&emsp;&emsp;&emsp;&emsp;&lt;/div &gt;</div>
                <div>&emsp;&emsp;{`)`}</div>
                <div>{`}`}</div>
            </code>

            <h3 className=' text-base text-center text-gray-400 lg:text-xl '>
                <div className=" text-yellow-300 inline-block">现在</div>&nbsp;你可以用你的音乐理论知识来演奏音乐了
            </h3>
        </div>
    )
}
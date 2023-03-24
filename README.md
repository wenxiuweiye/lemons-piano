<p align='center'>
    <img src="src/assets/pianoLogo.png"></img>
    <h1 align='center' style="font-size:3rem;">
      <div style="margin-top:1rem;margin-bottom:1rem">lemons-piano</div>
      <div align='center' style="color:gray;font-size:1.25rem;">An out-of-the-box react piano component</div>
    </h1>
    
</p>

## 📦安装
```bash
npm install lemons-piano
```

## 🔨用法
``` tsx
//引入组件
import Piano from 'lemons-piano'
//引入组件所使用的样式
import 'lemons-piano/dist/style.css'

function App() {
  
  return (
    <div className="App">
      {<!--直接使用组件即可-->}
      <Piano></Piano>
    </div>
  )
}

export default App

```
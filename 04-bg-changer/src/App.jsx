import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  let [color,setColor]=useState()
  return (
    <>
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-3 rounded-xl">
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}
          >Red</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"yellow"}}
          onClick={()=>setColor("yellow")}
          >Yellow</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}
          onClick={()=>setColor("green")}
          >Green</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [len,setLen]=useState(8)
  let [num,setNum]=useState(false)
  let [char,setChar]=useState(false)
  let [pass,setPass]=useState("")

  let passGen=useCallback(()=>{
    
  },[len,num,char,setPass])

  return (
    <>
    <h1 className='text-4xl text-center'>Password Generator</h1>
    </>
  )
}

export default App

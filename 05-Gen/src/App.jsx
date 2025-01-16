import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  let [len,setLen]=useState(8)
  let [numAllowed,setNumAllowed]=useState(false)
  let [charAllowed,setCharAllowed]=useState(false)
  let [password,setPass]=useState("")

  let passRef=useRef(null)

  let passGen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!#@$%^&*()[]{};:,.<>/?"
    }

    for (let i=1;i<=len;i++) {
      let char=Math.floor(Math.random()*str.length + 1)
      pass+=str[char]
    }
    
    setPass(pass)

  },[len,numAllowed,charAllowed,setPass])

  let copy=()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{passGen()},[len,numAllowed,charAllowed,setPass])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
         type="text"
         value={password}
         placeholder='password'
         className='outline-none w-full py-1 px-3' 
         readOnly
         ref={passRef}
        />
        <button
        onClick={copy}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input 
          type='range'
          min={6}
          max={100}
          value={len}
          onChange={(e)=>{
           setLen(e.target.value)
          }}
          />
          <label>Length: {len}</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input 
            type='checkbox'
            defaultChecked={numAllowed}
            id='numInp'
            onChange={()=>{
              setNumAllowed((prev)=>!prev)
            }}
          />
          <label htmlFor="numInp"> Numbers</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input 
            type='checkbox'
            defaultChecked={charAllowed}
            id='charInp'
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
          />
          <label htmlFor="charInp"> Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

import { useState,useCallback } from 'react'

function App() {
  let [len,setLen]=useState(8)
  let [numAllowed,setNumAllowed]=useState(false)
  let [charAllowed,setCharAllowed]=useState(false)
  let [password,setPass]=useState("")

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

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
         type="text"
         value={password}
         placeholder='password'
         className='outline-none w-full py-1 px-3' 
         readOnly
        />
      </div>
    </div>
    </>
  )
}

export default App

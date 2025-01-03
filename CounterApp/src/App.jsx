import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)

  function addVal(){

    if(counter>=20){
      alert("can't add anymore");
    }
    else{
    setCounter(counter+1);
    }
  }

  function delVal(){

    if(counter<=0){
      alert("can't delete anymore");
    }
    else{
    setCounter(counter-1);
    }
  }


  return (
    <>
    <h1>Count this mofo</h1>
    <h2>Counter value: {counter}</h2>
    <button
      onClick={addVal}
    >ADD</button>
    <br></br>
    <button
      onClick={delVal}
    >DELETE</button>
    </>
  )
}

export default App

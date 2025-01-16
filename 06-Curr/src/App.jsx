import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const[amt,setAmt]=useState(0)
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[camt,setCamt]=useState(0)

  return (
    <><h1 className='text-3xl bg-orange-300'>Curr App</h1>
    </>
  )
}

export default App

import './App.css'
import Card from './components/Card'

function App() {

  let newArr=[1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>HOHO</h1>
    <Card channel="Ghost Rider"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8CPcsZSiR_IIvA6RlOpmW87NrsLxNKa7Lg&s"type="Ghost"dialog="Penance."/>
    <Card channel="Dr Strange" src="https://pbs.twimg.com/profile_images/1642166292617543682/APFU4bBa_400x400.jpg"type="Magician" dialog="Sorceror."/>
    </>
  )
}

export default App

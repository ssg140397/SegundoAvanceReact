import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting = {'Bienvenidos'}/>
      <ItemCount initial={1} stock ={10} onAdd= {(quantity)=> console.log('cantidad agregada', quantity)}/>
    </>
  )
}

export default App

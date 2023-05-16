import { useState } from 'react'
import Home from './Pages/Home'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hola mundo</p>
      <Home/>
    </>
  )
}

export default App

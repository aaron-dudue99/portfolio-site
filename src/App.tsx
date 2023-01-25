import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Scroll from './components/Scroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-4/5 max-w-7xl my-0 mx-auto min-h-screen'>
      <Header />
      <Hero />
      <Scroll />
    </div>
  )
}

export default App

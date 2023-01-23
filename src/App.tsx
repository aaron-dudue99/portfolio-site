import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-200 my-0'>
      <Header />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LayeredXAxisBarChart from './BarChart'
import Appers from './DynamicRecharts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LayeredXAxisBarChart />
      <Appers />
    </>
  )
}

export default App

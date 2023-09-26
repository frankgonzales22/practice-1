import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LayeredXAxisBarChart from './BarChart'
import Appers from './DynamicRecharts'
import Container from './Multiple Drop Target/Container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import SaveToLocal from './Templates Save To Local Storage/SaveToLocal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LayeredXAxisBarChart />
      <Appers /> */}
      {/* <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider> */}
      <SaveToLocal />
    </>
  )
}

export default App

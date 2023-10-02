import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LayeredXAxisBarChart from './BarChart'
import Appers from './Dynamic Charts/DynamicRecharts'
import Container from './Multiple Drop Target/Container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import SaveToLocal from './Templates Save To Local Storage/SaveToLocal'
import ChartWithClickableLegend from './Templates Save To Local Storage/ClickableLegendByCyrel'
import Table from './ReactTable/TableReact'
import MainPivot from './Pivot Table/MainPivot'
import MainDynamicChart from './Dynamic Charts/MainDynamicChart'
import DisplayCharts from './Display Charts/DisplayCharts'
import MultipleAxis from './Group Multiple X axis/MultipleAxis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LayeredXAxisBarChart /> */}
      {/* <Appers /> */}
      {/* <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider> */}
      {/* <SaveToLocal /> */}
      {/* <ChartWithClickableLegend />
     <Table /> */}

     {/* nOT WORKING */}

      {/* <DndProvider backend={HTML5Backend}>
        <MainPivot />
      </DndProvider> */}

      {/* <MainDynamicChart /> */}
      <DisplayCharts />

    {/* <MultipleAxis />       */}
    </>
  )
}

export default App

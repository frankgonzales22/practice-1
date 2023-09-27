// // App.tsx
// import React, { useState } from 'react';
import './MainPivot.css';
// import PivotTable from './PivotTable';
import DraggableColumn from './DraggableColumn';
import ValueEditor from './ValueEditor';

const data = [
    {
        product: 'Product A',
        region: 'North',
        year: 2021,
        sales: 1000,
    },
    {
        product: 'Product A',
        region: 'North',
        year: 2022,
        sales: 1200,
    },
    {
        product: 'Product A',
        region: 'South',
        year: 2021,
        sales: 800,
    },
    {
        product: 'Product B',
        region: 'North',
        year: 2021,
        sales: 900,
    },
    {
        product: 'Product B',
        region: 'South',
        year: 2022,
        sales: 1100,
    },
];

const initialColumns = [
    // Your initial column configuration here
    {
        Header: 'Product',
        accessor: 'product',
    },
    {
        Header: 'Region',
        accessor: 'region',
    },
    {
        Header: 'Year',
        accessor: 'year',
    },
];

// App.tsx

import React, { useState } from 'react';
import PivotTable from './PivotTable';

function App() {
  const [data] = useState([
    {
        product: 'Product A',
        region: 'North',
        year: 2021,
        sales: 1000,
    },
    {
        product: 'Product A',
        region: 'North',
        year: 2022,
        sales: 1200,
    },
    {
        product: 'Product A',
        region: 'South',
        year: 2021,
        sales: 800,
    },
    {
        product: 'Product B',
        region: 'North',
        year: 2021,
        sales: 900,
    },
    {
        product: 'Product B',
        region: 'South',
        year: 2022,
        sales: 1100,
    },
  ]);

  const [columns, setColumns] = useState([
    {
        Header: 'Product',
        accessor: 'product',
    },
    {
        Header: 'Region',
        accessor: 'region',
    },
    {
        Header: 'Year',
        accessor: 'year',
    },
  ]);

  return (
    <div className="App">
      <h1>Pivot Table</h1>
      <PivotTable data={data} columns={columns} setColumns={setColumns} />
    </div>
  );
}

export default App;


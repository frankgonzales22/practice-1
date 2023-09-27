import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend as RechartsLegend,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'Jan', uv: 400, pv: 2400 },
  { name: 'Feb', uv: 300, pv: 1398 },
  { name: 'Mar', uv: 200, pv: 9800 },
  { name: 'Apr', uv: 1100, pv: 9800 },
  { name: 'May', uv: 700, pv: 9800 },
  { name: 'Jun', uv: 800, pv: 9800 },
  { name: 'Jl', uv: 1300, pv: 9800 },
  // Add more data points here...
];

const CustomLegend = ({ data , onClick } : any) => {
  return (
    <div>
      {data.map((entry : any) => (
        <div key={entry.dataKey} onClick={() => onClick(entry.dataKey)}>
          <span style={{ color: entry.color }}>&#9632;</span> {entry.value}
        </div>
      ))}
    </div>
  );
};

const ChartWithClickableLegend: React.FC = () => {
  const [hiddenValues, setHiddenValues] = useState<string[]>([]);

  const toggleValueVisibility = (dataKey: string) => {
    setHiddenValues((prevHiddenValues) =>
      prevHiddenValues.includes(dataKey)
        ? prevHiddenValues.filter((key) => key !== dataKey)
        : [...prevHiddenValues, dataKey]
    );
  };

  const legendData = data.map((entry) => ({
    dataKey: entry.name,
    value: entry.name,
    color: '#8884d8', // You can customize the color here
  }));

  const visibleData = data.filter((entry) => !hiddenValues.includes(entry.name));

  return (
    <div>
      <LineChart width={600} height={300} data={visibleData}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        {visibleData.map((entry) => (
          <Line key={entry.name} type="monotone" dataKey="uv" stroke="#8884d8" name={entry.name} />
        ))}
        <Tooltip />
        <RechartsLegend content={<CustomLegend data={legendData} onClick={toggleValueVisibility} />} />
      </LineChart>
    </div>
  );
};

export default ChartWithClickableLegend;

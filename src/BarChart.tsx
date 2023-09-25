import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: 'A', value1: 10, value2: 15 },
  { name: 'B', value1: 20, value2: 25 },
  { name: 'C', value1: 30, value2: 35 },
  // Add more data points as needed
];

const LayeredXAxisBarChart: React.FC = () => {
  return (
    <BarChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis xAxisId="0" dataKey="value1" />
      <XAxis xAxisId="1" dataKey="value2" axisLine={false} tickLine={false} height={40} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value1" fill="#8884d8" />
      <Bar dataKey="value2" fill="#82ca9d" />
    </BarChart>
  );
};

export default LayeredXAxisBarChart;
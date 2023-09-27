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

interface DataPoint {
    x: any;
    y: any;
}

export interface Dataset {
    label: string;
    data: DataPoint[];
}

interface ChartProps {
    datasets: Dataset[];
    xAxes: string[];
    yAxes: string[];
}

const DynamicBarChart: React.FC<ChartProps> = ({ datasets, xAxes, yAxes }) => {
    return (
        <BarChart width={800} height={400} data={datasets[0].data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis yAxisId="left" orientation="left" />
            {yAxes.slice(1).map((axis, index) => (
                <YAxis key={index} yAxisId={`right-${index}`} orientation="right" />
            ))}
            <Tooltip />
            <Legend />
            {datasets.map((dataset, index) => (
                <Bar
                    key={index}
                    dataKey="y"
                    data={dataset.data}
                    name={dataset.label}
                    fill={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                    yAxisId={index === 0 ? 'left' : `right-${index - 1}`}
                />
            ))}


        </BarChart>
    );
};

export default DynamicBarChart;

// import React from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from 'recharts';

// interface DataPoint {
//   [key: string]: number;
// }

// interface Dataset {
//   label: string;
//   data: DataPoint[];
// }

// interface ChartProps {
//   datasets: Dataset[];
//   xAxes: string[];
//   yAxes: string[];
// }

// const DynamicBarChart: React.FC<ChartProps> = ({ datasets, xAxes, yAxes }) => {
//   return (
//     <BarChart width={800} height={400} data={datasets[0].data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       {xAxes.map((xAxis, index) => (
//         <XAxis
//           key={index}
//           dataKey={xAxis}
//           tick={{ angle: -45 }}
//           interval={0}
//           height={60}
//         />
//       ))}
//       {yAxes.map((yAxis, index) => (
//         <YAxis
//           key={index}
//           yAxisId={`y${index}`}
//           orientation={index === 0 ? 'left' : 'right'}
//         />
//       ))}
//       <Tooltip />
//       <Legend />
//       {datasets.map((dataset, index) => (
//         <Bar
//           key={index}
//           dataKey={`y${index}`}
//           data={dataset.data}
//           name={dataset.label}
//           fill={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
//           yAxisId={`y${index}`}
//         />
//       ))}
//     </BarChart>
//   );
// };

// export default DynamicBarChart;


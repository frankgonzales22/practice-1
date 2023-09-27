import React from 'react'
import DynamicBarChart, { Dataset } from './DynamicBarChart';

const datasets: Dataset[] = [
    {
        label: 'Dataset 1',
        data: [
            { x: 'A', y: 10 },
            { x: 'B', y: 15 },
            { x: 'C', y: 8 },
        ],
    },
    {
        label: 'Dataset 2',
        data: [
            { x: 'x', y: 22 },
            { x: 'y', y: 33 },
            { x: 'z', y: 55 },
        ],
    },

];


const xAxes = [''];
const yAxes = ['Y Axis 1', 'Y Axis 2'];

const MainDynamicChart = () => {





    return (
        <>
            <DynamicBarChart datasets={datasets} xAxes={xAxes} yAxes={yAxes} />
        </>
    )
}

export default MainDynamicChart
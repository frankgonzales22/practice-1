import React from 'react'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

interface MultipleAxisBarChartProps {
    data?: [],
    row?: string[]
    col?: string[]

}


const MultipleAxisBarChart = ({ data, row, col }: MultipleAxisBarChartProps) => {

    const dataRev = ['1 1', '2 2', ' 3  3']

    const revData = dataRev.reverse()
    const revRows = row?.reverse();
    // console.log(revRows)
    // console.log(col)
    // col?.map((i, index) => console.log(i))

    return (
        <ResponsiveContainer width='90%' height='100%'>
            <BarChart
                width={800}
                height={350} data={data}
            >

                <CartesianGrid strokeDasharray="3 3" />
                {row?.map((i, index) => (

                    <XAxis dataKey={i} xAxisId={index} interval={index === 2 ? 24 : index === 1 ? 14 : 8} /> 

                )

                )}
                <YAxis width={105} />
                <Tooltip />
                <Legend />
                {col?.map((i, index) =>
                    <Bar
                        // type="monotone"
                        dataKey={i}
                        stackId={index}
                        fill={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                    />
                )}
            </BarChart>
        </ResponsiveContainer>



    )
}

export default MultipleAxisBarChart



// if ( index === 2) return interval = 12
// else if (index === 1) return interval = 6
// else return interval =2 
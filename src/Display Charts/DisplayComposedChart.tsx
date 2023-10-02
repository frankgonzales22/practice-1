import React from 'react'
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, Line, ResponsiveContainer } from 'recharts'
import { data } from '../ReactTable/mockData'



interface DisplayComposedChartProps {
    data?: [],
    row?: string[]
    col?: string[]

}

const DisplayComposedChart = ({ data, row, col }: DisplayComposedChartProps) => {
    return (
        <ResponsiveContainer width='90%' height='100%'>
            <ComposedChart
                width={800}
                height={350} data={data}
            >
                {row?.map((i, index) =>
                    <XAxis dataKey={i} xAxisId={index} />
                )}
                <YAxis width={105} />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                {col?.map((i, index) =>
                    index % 3 === 0 ?
                        <Line type="monotone"
                            key={index}
                            dataKey={i}
                            // stackId={index}
                            stroke={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                            fill={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                        />
                        : index % 2 === 0 ?
                            <Area type="monotone"
                                key={index}
                                dataKey={i}
                                stackId={index}
                                stroke={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                                fill={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                            />
                            :
                            <Bar type="monotone"
                                key={index}
                                dataKey={i}
                                stackId={index}
                                stroke={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                                fill={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                            />
                )}
                {/* {col?.map((i, index) =>
                <Bar type="monotone"
                    dataKey={i}
                    stackId={index}
                    stroke={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                    fill={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                />
            )} */}
                {/* {col?.map((i, index) =>
                <Line type="monotone"
                    dataKey={i}
                    // stackId={index}
                    stroke={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                    fill={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                />
            )} */}

            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default DisplayComposedChart
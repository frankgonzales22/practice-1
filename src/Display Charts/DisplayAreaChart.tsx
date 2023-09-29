import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


interface DisplayAreChartProps {
    data?: [],
    row?: string[]
    col?: string[]
}


const DisplayAreaChart = ({ data, row, col }: DisplayAreChartProps) => {




    return (
        <>      
            <ResponsiveContainer
                width='90%' height='100%'
            >
                <AreaChart
                    width={800}
                    height={350}
                    data={data}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    {row?.map((i, index) =>
                        <XAxis dataKey={i} xAxisId={index} />
                    )}

                    <YAxis width={105} />
                    <Legend iconType='square' />
                    <Tooltip />

                    {col?.map((i, index) =>
                        <Area type="monotone"
                         dataKey={i} 
                        stackId={index} 
                        stroke={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                        fill={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                         />
                    )}
                </AreaChart>
            </ResponsiveContainer>
            {/* </div > */}



        </>

    )
}

export default DisplayAreaChart
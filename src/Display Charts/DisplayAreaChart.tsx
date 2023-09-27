import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


interface DisplayAreChartProps {
    data?: [],
    row?: string[]
    col?: string[]
}


const DisplayAreaChart = ({ data, row, col }: DisplayAreChartProps) => {




    return (
        <>

            {/* <div
                style={{
                    // height: '40px',
                    // paddingTop: '10px',
                    // marginTop: '10px',
                    marginLeft: '60px'
                }}
            > */}
            <ResponsiveContainer
                width='90%' height='100%'
            >
                <AreaChart
                    width={800}
                    height={350}
                    data={data}

                >
                    {/* {JSON.stringify(row)} */}
                    <CartesianGrid strokeDasharray="3 3" />



                    {/* <XAxis
                        dataKey="regioncode"
                    /> */}

                    {row?.map((i, index) =>
                        <XAxis dataKey={i} xAxisId={index} />
                        // {JSON.stringify(i)}
                    )}

                    <YAxis width={105} />
                    <Legend iconType='square' />
                    <Tooltip />

                    {col?.map((i, index) =>
                        // <XAxis dataKey={i} xAxisId={index} />
                        <Area type="monotone"
                         dataKey={i} 
                        stackId={index} 
                        stroke={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                        fill={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                         />
                    )}

                    {/* <Area type="monotone" dataKey="qouta" stackId="0" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="nsTotal" stackId="1" stroke="#82ca9d" fill="#82ca9d" /> */}
                    {/* <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
                </AreaChart>
            </ResponsiveContainer>
            {/* </div > */}



        </>

    )
}

export default DisplayAreaChart
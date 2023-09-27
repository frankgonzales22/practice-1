import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


interface DisplayBarChartProps {
    data?: [],
    row?: string[]
    col?: string[]

}


const DisplayBarChart = ({ data, row, col }: DisplayBarChartProps) => {


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

                <BarChart
                    width={800}
                    height={350} data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    {/* <XAxis
                        //  xAxisId={0} 
                        dataKey="regioncode"
                    />


                    <XAxis
                        //  xAxisId={0} 
                        dataKey="territorycode"
                    /> */}
                    {row?.map((i, index) =>
                        <XAxis dataKey={i} xAxisId={index} />
                        // {JSON.stringify(i)}
                    )}
                    <YAxis width={105} />
                    <Tooltip />
                    <Legend />
                    {/* <Bar dataKey="qouta" fill="#8884d8" />
                    <Bar dataKey="nsTotal" fill="#82ca9d" /> */}

                    {col?.map((i, index) =>
                        // <XAxis dataKey={i} xAxisId={index} />
                        <Bar 
                        // type="monotone"
                            dataKey={i}
                            stackId={index}
                            // stroke={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                            fill={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
                        />
                    )}
                </BarChart>
            </ResponsiveContainer>

            {/* </div > */}

        </>

    )
}

export default DisplayBarChart
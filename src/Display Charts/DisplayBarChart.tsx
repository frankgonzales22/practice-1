import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


interface DisplayBarChartProps {
    data?: [],
    row?: string[]
    col?: string[]

}


const DisplayBarChart = ({ data, row, col }: DisplayBarChartProps) => {


    return (
        <ResponsiveContainer  width='90%' height='100%'>
        <BarChart
            width={800}
            height={350} data={data}
        >
            <CartesianGrid strokeDasharray="3 3" />
            {row?.map((i, index) =>
                <XAxis dataKey={i} xAxisId={index} />
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

export default DisplayBarChart
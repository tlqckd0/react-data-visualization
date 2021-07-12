import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const ChartTest = ({ data }) => {

    return (
        <div>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default ChartTest;

import React from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';

const CrimeChart = ({ data }) => {
    return (
        <div>
            <LineChart width={800} height={500} data={data} 
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="강력범" stroke="#8884d8" />
                <Line type="monotone" dataKey="절도범" stroke="#82ca9d" />
                <Line type="monotone" dataKey="폭력범" stroke="#6884d8" />
                <CartesianGrid stroke="#ccc"  strokeDasharray="5 5" />
                <XAxis dataKey="일자" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36} iconType="line" />
            </LineChart>
        </div>
    );
};

export default CrimeChart;

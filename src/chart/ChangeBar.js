import React from 'react';
import {
    BarChart,
    Bar ,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';

const ChangeBar = ({ data }) => {
    return (
        <div>
            <BarChart width={800} height={500} data={data} 
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Bar  dataKey="강력범" fill="#8884d8" />
                <Bar  dataKey="절도범" fill="#82ca9d" />
                <Bar  dataKey="폭력범"  fill="#6884d8" />
                <CartesianGrid stroke="#ccc"  />
                <XAxis dataKey="일자" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36} iconType="line" />
            </BarChart>
        </div>
    );
};

export default ChangeBar;

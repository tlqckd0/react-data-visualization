import React from 'react';
import {
    ComposedChart,
    Area,
    Bar,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';

const CrimeChartCompose = ({ data }) => {

    return (
        <div>
            <ComposedChart width={800} height={600} data={data}>
                <Bar type="monotone" dataKey="강력범" fill="#8884d8" />
                <Area type="monotone" dataKey="절도범" stroke="#82ca9d" />
                <Line type="monotone" dataKey="폭력범" stroke="#6884d8" />
                <CartesianGrid stroke="#ccc"  strokeDasharray="5 5" />
                <XAxis dataKey="일자" />
                <YAxis />
                <Tooltip />
                <Legend />
            </ComposedChart>
        </div>
    );
};

export default CrimeChartCompose;

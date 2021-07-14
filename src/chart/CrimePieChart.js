import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const CrimePieChart = ({ data }) => {
    return (
        <div>
            <PieChart width={1000} height={600}>
                <Pie
                    dataKey="강력범"
                    data={data}
                    cx="20%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                />
                <Pie
                    dataKey="절도범"
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#82ca9d"
                    label
                />
                <Pie
                    dataKey="폭력범"
                    data={data}
                    cx="80%"
                    cy="50%"
                    outerRadius={100}
                    fill="#6884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default CrimePieChart;

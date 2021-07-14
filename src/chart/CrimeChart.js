import React, { useState } from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';

//기본 투명도 : 1
const state = {
    opacity: {
        "강력범": 1,
        "절도범": 1,
        "폭력범":1,
    },
};

const CrimeChart = ({ data }) => {
    const [opacity, setOpacity] = useState(state.opacity);

    const handleMouseEnter = (o) => {
        const { dataKey } = o;
        const newOpacity = opacity;
        newOpacity[dataKey] = 0.5;
        setOpacity(newOpacity);
        console.log(newOpacity);
        console.log(opacity);
    };

    const handleMouseLeave = (o) => {
        const { dataKey } = o;
        const newOpacity = opacity;
        newOpacity[dataKey] = 1;
        setOpacity(newOpacity);
        console.log(newOpacity);
        console.log(opacity);
    };
    return (
        <div>
            <LineChart
                width={800}
                height={500}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Line
                    type="monotone"
                    dataKey="강력범"
                    strokeOpacity={opacity["강력범"]}
                    stroke="#8884d8"
                    strokeWidth="2"
                />
                <Line
                    type="monotone"
                    dataKey="절도범"
                    strokeOpacity={opacity["절도범"]}
                    stroke="#82ca9d"
                    strokeWidth="2"
                />
                <Line
                    type="monotone"
                    dataKey="폭력범"
                    stroke="#6884d8" 
                    strokeWidth="2"
                    strokeOpacity={opacity["폭력범"]}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="일자" />
                <YAxis />
                <Tooltip />
                <Legend
                    verticalAlign="top"
                    height={36}
                    iconType="line"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </LineChart>
        </div>
    );
};

export default CrimeChart;

import React, { useState } from 'react';
import ChartTest from './chart/ChartTest';
import ChartInteractions from './chart/ChartInteractions';

const OriginData = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
function App() {
    const [data, setData] = useState(OriginData);
    const [cnt, setCnt] = useState(0);
    return (
        <div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setCnt(cnt + 1);
                    setData(
                        data.concat({
                            name: 'Page ' + cnt,
                            uv: 500 + 200 * cnt,
                            pv: 700 + 400 * cnt,
                        })
                    );
                }}
            >
                Click
            </button>
            <div>
                <p>기본 차트</p>
                <ChartTest data={data} />
            </div>
            <div>
                <p>상호작용 추가</p>
                <ChartInteractions data={data} />
            </div>
        </div>
    );
}

export default App;

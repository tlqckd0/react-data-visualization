import React, { useState, useEffect } from 'react';

import CrimeChart from './chart/CrimeChart';
import CrimeChartBar from './chart/CrimeChartBar';
import axios from 'axios';
import CrimeChartCompose from './chart/CrimeChartCompose';
import './App.css';
import PieChartTest from './chart/PieChart';
import * as Calculate from './Calculate';
import CrimePieChart from './chart/CrimePieChart';
import ChangeBar from './chart/ChangeBar';

const standard_day = 2014;

function App() {
    // const [data, setData] = useState([]);
    const [originData, setOriginData] = useState([]); //서버에서 가져오는 데이터
    const [data_year, setData_year] = useState([]); // 년도별로 보여주는거 -> year_list를 이용함.
    const [year_list, setYear_list] = useState([0]); //2014가 0임

    const [monthSum, setMonthSum] = useState([]); //각 월별 합
    const [yearSum, setYearSum] = useState([]); //각 년도별 합

    const [sumData, setSumData] = useState([]); //변하는 데이터 보여주기

    useEffect(() => {
        axios
            .get('/v1/crimedata/incheon')
            .then((res) => {
                const year_Data = per_year_crime(res.data, year_list);
                // res.data.slice(0,12);
                setOriginData(res.data);
                setYearSum(Calculate.getYearSum(res.data));
                setMonthSum(Calculate.getMonthSum(res.data));

                setSumData(Calculate.getYearSum(res.data));
                setData_year(year_Data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    const toggle_year = (e) => {
        const num = parseInt(e.target.innerText) - standard_day;
        const new_year_list = year_list;

        if (new_year_list.some((year) => year === num)) {
            const delIdx = new_year_list.findIndex((year) => year === num);
            if (delIdx > -1) {
                new_year_list.splice(delIdx, 1);
            }
        } else {
            new_year_list.push(num);
            new_year_list.sort((a, b) => a - b);
        }
        setYear_list(new_year_list);

        const year_Data = per_year_crime(originData, new_year_list);
        setData_year(year_Data);
    };

    const per_year_crime = (crimeList, list) => {
        const year_Data = [];
        list.forEach((year_idx) => {
            crimeList
                .slice(year_idx * 12, (year_idx + 1) * 12)
                .forEach((item) => {
                    year_Data.push(item);
                });
        });
        return year_Data;
    };
    return (
        <div>
            <div>
                <CrimeChart data={originData} />
            </div>
            <div>
                <span className="year-change" onClick={toggle_year}>
                    2014
                </span>
                <span className="year-change" onClick={toggle_year}>
                    2015
                </span>
                <span className="year-change" onClick={toggle_year}>
                    2016
                </span>
                <span className="year-change" onClick={toggle_year}>
                    2017
                </span>
                <span className="year-change" onClick={toggle_year}>
                    2018
                </span>
                <CrimeChartBar data={data_year} />
            </div>
            <div>
                <CrimeChartCompose data={originData} />
            </div>
            <div>
                <span
                    className="year-change"
                    onClick={(e) => {
                        setSumData(yearSum);
                    }}
                >
                    연도별
                </span>
                <span
                    className="year-change"
                    onClick={(e) => {
                        setSumData(monthSum);
                    }}
                >
                    월별
                </span>
                <ChangeBar data = {sumData}/>
                <CrimePieChart data={sumData} />
            </div>
        </div>
    );
}

export default App;

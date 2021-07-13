import React, { useState,useEffect } from 'react';

import CrimeChart from './chart/CrimeChart';
import CrimeChartBar from './chart/CrimeChartBar';
import axios from 'axios';
import CrimeChartCompose from './chart/CrimeChartCompose';
import './App.css';

// import ChartTest from './chart/ChartTest';
// import ChartInteractions from './chart/ChartInteractions';
const standard_day = 2014

function App() {
    // const [data, setData] = useState([]);
    const [data2,setData2] = useState([]);
    const [data_year, setData_year] = useState([]);
    const [year_list, setYear_list] = useState([0]);//2014가 0임
    // const [cnt, setCnt] = useState(0);
    // useEffect(() => {
    //     axios.get('/v1/testData')
    //     .then(res=>{
    //         setData(res.data);
    //     }).catch(err=>{
    //         console.error(err);
    //     });
    // },[])

    useEffect(() => {
        axios.get('/v1/crimedata/incheon')
        .then(res=>{
            const year_Data = per_year_crime(res.data, year_list)
            // res.data.slice(0,12);            
            setData2(res.data);
            setData_year(year_Data);
        }).catch(err=>{
            console.error(err);
        });
    },[])

    const toggle_year = (e)=>{
        const num = parseInt(e.target.innerText) - standard_day;
        const year_Data = data2.slice(num*12, (num+1) * 12);
        const new_year_list = year_list;

        console.log(new_year_list);
        if(new_year_list.some(year=> year === num)){
            const delIdx = new_year_list.findIndex(year=>year === num);
            if(delIdx >-1){
                new_year_list.splice(delIdx,1);
            }
            console.log('이미 있음 -> 제거');

        }else{
            new_year_list.push(num);
            setYear_list(new_year_list);
            setYear_list.sort(function(a,b)
            {return a - b;});
            console.log('추가');
        }
        console.log(new_year_list);

        setData_year(year_Data);
    }

    const per_year_crime = (crimeList, list)=>{
        const year_Data = [];
        list.forEach(year_idx=>{
            crimeList.slice(year_idx*12, (year_idx+1) * 12).forEach(item=>{
                year_Data.push(item);
            })
        })
        return year_Data;
    }
    return (
        <div>
            <div>
                <CrimeChart  data={data2}/>
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
                <CrimeChartBar data = {data_year}/>
            </div>
            <div>
                <CrimeChartCompose data = {data2}/>
            </div>
        </div>
    );
}

export default App;

const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer(app);
const PORT = 8080;

const Data = require("./data/testData");
const crimeData = require('./data/getCrime');

app.get('/',(req,res,next)=>{
    res.send('test');
})

app.get('/v1/testData',(req,res,next)=>{
    console.log("get response");
    res.json(Data);
})

app.get('/v1/crimedata/:location',(req,res,next)=>{
    console.log(`get crime data ${req.params.location}`)
    crimeData(req.params.location,(crime_data)=>{
        res.json(crime_data);
    })
})

server.listen(PORT, ()=>{
    console.log(`server start at port ${PORT}`);
})
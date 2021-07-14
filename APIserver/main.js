const xlsx = require('xlsx');

const excelFile = xlsx.readFile('./data/EXCEL/인천 기상 2014~2018.xlsx');

const sheetName = excelFile.SheetNames[0];
const firstSheet = excelFile.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json(firstSheet, { defval: '' });



const date_excel_to_js = (excelDate)=>{
  
    return new Date(Math.round((excelDate - 25569)*86400*1000));
}
const parseData  =(cb)=>{
    const parsedData = jsonData.filter((data,idx)=>{
        delete data.__EMPTY;
        delete data.__EMPTY_1;
        delete data.__EMPTY_2;
        delete data.__EMPTY_3;
        data['일시'] = date_excel_to_js(data['일시'])
        if(data['일조율'] !== ''){
            return data;
        }
    })
    cb(parsedData);
}


const crimeData = require('./data/getCrime')
crimeData('incheon',(crime_data)=>{
    console.log(crime_data)
})
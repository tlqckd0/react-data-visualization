const xlsx = require('xlsx');

let excelFile = xlsx.readFile(`./EXCEL/incheon.xlsx`);

const sheetName = excelFile.SheetNames[0];
const firstSheet = excelFile.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json(firstSheet, { defval: '' });
console.log(jsonData);
const xlsx = require('xlsx');
const moment = require('moment');

const date_excel_to_js = (excelDate) => {
    const after_change = new Date(Math.round((excelDate - 25569) * 86400 * 1000));
    return moment(after_change).format('YYYY MM');
};

module.exports = (location,cb) => {
    let excelFile = xlsx.readFile(`./data/EXCEL/${location}.xlsx`);

    const sheetName = excelFile.SheetNames[0];
    const firstSheet = excelFile.Sheets[sheetName];

    const jsonData = xlsx.utils.sheet_to_json(firstSheet, { defval: '' }).map((item, idx)=>{
        item['일자'] = date_excel_to_js(item['일자']);
        return item;
    });

    cb(jsonData);
};

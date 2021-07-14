export const getMonthSum = (originData) => {
    const month_sum_list = [{
        일자:"1월",
        강력범: 0,
        절도범: 0,
        폭력범: 0,
    },{
        일자:"2월",
        강력범: 0,
        절도범: 0,
        폭력범: 0,
    },{
        일자:"3월",
        강력범: 0,
        절도범: 0,
        폭력범: 0,
    },{
        일자:"4월",
        강력범: 0,
        절도범: 0,
        폭력범: 0,
    },{
        일자:"5월",
        강력범: 0,
        절도범: 0,
        폭력범: 0,
    },{
        일자:"6월",
        강력범: 0,
        절도범: 0,
        폭력범: 0,
    },{
        일자:"7월",
        강력범: 0,
        절도범: 0,
        폭력범: 0,
    },{
        일자:"8월",
        강력범: 0,
        절도범: 0,
        폭력범: 0,
    },{
        일자:"9월",
        강력범: 0,
        절도범: 0,
        폭력범: 0,
    },{
        일자:"10월",
        강력범: 0,
        절도범: 0,
        폭력범: 0,
    },{
        일자:"11월",
        강력범: 0,
        절도범: 0,
        폭력범: 0,
    },{
        일자:"12월",
        강력범: 0,
        절도범: 0,
        폭력범: 0,
    }];
    originData.forEach((item) => {
        const month = parseInt(item['일자'].substring(5, 7));
        month_sum_list[month-1].강력범 += item['강력범'];
        month_sum_list[month-1].절도범 += item['절도범'];
        month_sum_list[month-1].폭력범 += item['폭력범'];
    });
    return month_sum_list;
};

export const getYearSum = (originData) => {
    //14년 15년 16년 17년 18년 각각의 범죄합
    //일단은 하드코딩하자.
    const year_sum_list = [
        {
            일자: '2014년',
            강력범: 0,
            절도범: 0,
            폭력범: 0,
        },
        {
            일자: '2015년',
            강력범: 0,
            절도범: 0,
            폭력범: 0,
        },
        {
            일자: '2016년',
            강력범: 0,
            절도범: 0,
            폭력범: 0,
        },
        {
            일자: '2017년',
            강력범: 0,
            절도범: 0,
            폭력범: 0,
        },
        {
            일자: '2018년',
            강력범: 0,
            절도범: 0,
            폭력범: 0,
        },
    ];

    originData.forEach((item) => {
        const year = parseInt(item['일자'].substring(0, 4));
        year_sum_list[year-2014].강력범 += item['강력범'];
        year_sum_list[year-2014].절도범 += item['절도범'];
        year_sum_list[year-2014].폭력범 += item['폭력범'];
    });

    return year_sum_list;
};

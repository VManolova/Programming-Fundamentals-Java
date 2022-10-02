function nextDay(year, month, day) {
    // let date = new Date(year,month,day);
    // console.log(date);
    //let nday=day+1;
    let nextDay = new Date(year, month-1, day+1);
    // console.log(nextDay);

    let yearNext = nextDay.getFullYear();
    let monthNext = nextDay.getMonth()+1;
    // if (monthNext === 0) monthNext = 1;
    let dayNext = nextDay.getDate();

    console.log(`${yearNext}-${monthNext}-${dayNext}`);
}

nextDay(2016,9,30)
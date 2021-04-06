var year = 2021;

if (year % 400 == 0) {
    console.log(year + " is a leap year")
}

else if (year % 4 == 0) {
    if (year % 100 !== 0) {
        console.log(year + " is a leap year")
    }

    else{
        console.log(year + " not a leap year");
    }
}

else{
    console.log(year + " not a leap year");
}

// console.log((((2000%4==0) && (2000%100!=0)) || (2000%400==0))?"lear year":"Not leap year");
var num = 5;
var n1 = 0;
var n2 = 1;
var series;

for (let i = 0; i <= num; i++) {
    console.log(n1);
    series = n1 + n2;
    n1 = n2;
    n2 = series;
    
}
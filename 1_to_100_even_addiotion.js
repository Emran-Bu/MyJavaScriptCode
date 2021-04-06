var n = 0;
var i = 1;
while (i <= 100) {
    if (i % 2 == 0) {

        n = n + i ;
        console.log(i)
        
    }
    i++;
}

console.log("summation of 1 to 100 even number is: " + n)
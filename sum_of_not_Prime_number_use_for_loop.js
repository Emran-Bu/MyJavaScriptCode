
var sum = 0;
for (let i = 1; i <= 100; i++) {
    
    var check = "prime";
    for (let j = 2; j < i; j++) {
        if (i%j == 0) {
            check = "not prime";
            break;
        }
    }
    if (check == "not prime") {
        sum = sum + i;
        console.log(i);
    }

}
console.log("The sum of total not prime Number:" + sum);
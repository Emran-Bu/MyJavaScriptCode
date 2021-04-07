var i = 1;
while (i <= 100) {
    
    var check = "prime"

    var j = 2;
    while (j < i) {
        
        if (i % j == 0) {
            check = "not prime"
        }
        j++;
    }
    if (check == "not prime") {
        console.log(i)
    }
    i++;
}

var i = 1;
do{
    var check = "prime";
    
    j = 2;
    do{
        if (i % j == 0) {
            check = "not prime";
            break;
        }
        j++;
    }
    while (j < i)
    

    if (check == "prime") {
        console.log(i)
    }
    i++;
}

while (i<=100)


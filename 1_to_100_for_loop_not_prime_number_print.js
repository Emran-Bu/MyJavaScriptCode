
for(var i = 1; i <= 100; i++){
    var check = "prime"
    for(var j = 2; j < i; j++){
        if (i % j == 0) {
            check = "not prime";
            break;
        }
    }
    if (check == "not prime") {
        console.log(i);
    }
}
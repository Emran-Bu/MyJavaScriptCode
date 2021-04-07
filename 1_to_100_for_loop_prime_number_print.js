for (let i = 1; i <= 100; i++) {
    var check = "prime";
    for (let j= 2; j < i; j++) {
        if (i%j == 0) {
            
            check = "not prime"
            break;
        }
        
    }
    // console.log(i+" : "+check);
    if (check == "not prime") {
        console.log(i);
    }
}
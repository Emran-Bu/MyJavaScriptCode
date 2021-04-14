//basic function
var arrow = (a, b) => {
    var sum = a + b;
    console.log(sum)
}

arrow(10, 10)

//

var check = (num) => {

    var sum = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    console.log(sum);

}

check(13)

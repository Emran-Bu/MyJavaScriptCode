
// even sum

var sum = 0;
var i = 0;
do{
    if (i%2 == 0) {
        sum = sum + i;
    }
    i++;
}

while (i<=100);
console.log("The sum of the total even number: " + sum);


// odd sum

var sum = 0;
var i = 0;
do{
    if (i%2 == 1) {
        sum = sum + i;
    }
    i++;
}

while (i<=100);
console.log("The sum of the total odd number: " + sum);
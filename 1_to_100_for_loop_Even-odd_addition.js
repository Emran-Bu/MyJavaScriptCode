
// even addition

var sum = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log("The sum of the total even numbers: " + sum);


// odd addition

var sum = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        sum = sum + i;
    }
}
console.log("The sum of the total odd numbers: " + sum);
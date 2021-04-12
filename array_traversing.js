var arr = [6, 7, 8, 9, 10, 5, 4, 3, 2, 1];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 2;
}

console.log(arr);

//

var arr = [6, 7, 8, 9, 10, 5, 4, 3, 2, 1];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log(sum);

//

var arr = [6, 7, 8, 9, 10, 5, 4, 3, 2, 1];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum = sum + arr[i];
        console.log(arr[i]);
    }
}

console.log(sum);

//

var arr = [6, 7, 8, 9, 10, 5, 4, 3, 2, 1];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        sum = sum + arr[i];
        console.log(arr[i]);
    }
}

console.log(sum);
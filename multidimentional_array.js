// two dimensional array

var arr = [
    [5, 7, 9, 5, 8, 12],
    [9, 8, 1, 5, 8, 10],
    [29, 18, 11, 41, 81]
];

// console.log(arr[0])

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log("Elementi " + i + " : " + arr[i][j]);
    }
}

// three dimensional array

var arr = [
    [
        [5, 7, 9, 5, 8, 12],
        [9, 8, 1, 5, 8, 10],
        [29, 18, 11, 41, 81]
    ],
];

// console.log(arr[0])

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let n = 0; n < arr[i][j].length; n++) {
            console.log("Elementi " + i + " : " + arr[i][j][n]);
        }
    }
}

// var star = 10;
// var count = 1;

// for (let i = 1; i <= star ; i++) {
//     for (let j = 0; j < star; j++) {
//         process.stdout.write("*")
//     }
//     console.log();
// }

// var star = 10;
// var count = 1;

// for (let i = star; i >= count ; i--) {
//     for (let j = 0; j <= star - i; j++) {
//         process.stdout.write("*")
//     }
//     console.log();
// }

// var star = 10;
// var count = 0;

// for (let i = star; i >= count ; i--) {
//     for (let j = star; j >star - i; j--) {
//         process.stdout.write("*")
//     }
//     console.log();
// }

var star = 10;
var count = 0;

for (let i = star; i >= count ; i--) {
    for (let j = star; j >star-i; j--) {
        process.stdout.write(" ")
    }

    for (let n = star; n >star -i; n--) {
        process.stdout.write("*")
    }

    for (let m = star; m >star-i; m--) {
        process.stdout.write("*")
    }
    console.log();
}
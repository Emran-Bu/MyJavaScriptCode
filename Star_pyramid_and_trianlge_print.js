let star = 10;
let end = 1;

for (let i = star; i >= end; i--) {
    for (let k = 0; k < star-i; k++) {
        process.stdout.write(" ")
    }

    for (let j = i; j >= 1; j--) {
        process.stdout.write("*")
    }

    for (let m = 1; m <= i-1; m++) {
        process.stdout.write("*")
    }
    console.log()
}

let value = 37;
let check = 1;

for (let i = 2; i < value; i++) {

    if (value % i == 0) {
        check = 0;
        break;
    }
}

if (check) {
    console.log(value + " : This is prime");
}
else{
    console.log(value + " : This is not prime");
}
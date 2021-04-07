
let string = "";

let i = 1;
while (i <= 5) {

    let j = 0;
    while (j < i) {
        string+= "*";
        j++;
    }
    string+= "\n";
    i++;
}
console.log(string);
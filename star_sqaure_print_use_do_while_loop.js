
let string = "";

let i = 1;
do {
    let j = 0;
    do {
        string+= "*";
        j++;
    }
    while (j < i)
    string+= "\n";
    i++;
}
while (i <= 5)
console.log(string);
function sayHi(n) {
    if (n === 0) {
        return
    }
    console.log(n + " Hi, i am calling");
    sayHi(n - 1);
}
sayHi(10);

//

function sum(n) {
    if (n === 1) {
        return 1
    }
    return n + sum(n-1)
}                                        
console.log(sum(5) + " Total sum");

//

function fact(n) {
    if (n === 1) {
        return 1
    }

    return n * fact(n - 1)
}
console.log(fact(5) + " is factorial value");

//

var arr = [1, 2, 3, 4, 5]

function sumArr(arr, lastIndex) {
    if (lastIndex < 0) {
        return 0
    }
    return arr[lastIndex] + sumArr(arr, lastIndex-1)
}

console.log(sumArr(arr, arr.length - 1))
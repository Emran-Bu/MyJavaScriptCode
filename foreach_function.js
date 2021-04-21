var arr = [1, 2, 3, 4, 5, 6]
var sum = 0;
arr.forEach(function (value, index, arr) {
    console.log(value, index, arr)
    sum += value
})

console.log(sum);

//

function fun(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]); 
        cb(arr[i], i, arr)
    }
}

var sum = 0;
fun(arr, function(value, index, arr) {
    // console.log(value);
    console.log(value, index, arr)
    sum = sum + value
})

console.log(sum);

//

fun(arr, function (value, index, arr){
    arr[index] = value + 5
})

console.log(arr);
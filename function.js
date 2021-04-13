function add(a, b) {
    var i = (a + b)
    return i;
}

var n = add( 12, 5)

function sub(x, y) {
    var j = (x - y)
    return j;
}

var g = sub( 50, 20)

if (n<g) {
    x = n
    y = g
} else{
    x = g
    y = n
}

function series() {
    for (let k = x; k <= y; k++) {
        console.log(k)
    }
}
series()
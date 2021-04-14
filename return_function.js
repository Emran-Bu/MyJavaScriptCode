function add() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum
}

var result = add(1, 2, 3)

console.log(result)

//

function test(name, email) {
console.log("My name is : " + name + "\n" + "My email : " + email)
}

test("Emran", "emran@gmail.com")

//

function name(params) {
    
}
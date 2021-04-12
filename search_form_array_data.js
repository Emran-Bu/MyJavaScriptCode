var arr = [5, 4, 8, 9, 15, 18, 20];
var search = 8;
var found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
        console.log("Data found at index no : " + i);
        found = true;
        break;
    }
}

if (!found) {
    console.log("Data Not Found");
}
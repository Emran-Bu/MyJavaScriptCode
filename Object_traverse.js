var country = {
    capital: "Dhaka",
    division: [{no:1, name: "Dhaka"},{no:2, name: "Rajshahi"},{no:3, name:"Khulna"}]
}
country.capital= "comilla"
console.log(country.capital)

for (let i = 0; i < country.division.length; i++) {
    console.log(country.division[i].name)
}

country.division.forEach(element => {
    console.log(element.no +": " + element.name )
});
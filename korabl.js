// ship position
const location1 = 1
const location2 = 2
const location3 = 3

// potoplen ili net
let isSunk = false
//popitka ugadat gde korabl
let guess;

while (isSunk === false) {
    //prevrashaem stroku v chislo
    guess = +prompt("Fire , enter the number 0-6")
    if (guess === location1 || guess === location2 || guess === location3) {
        alert("hit")
    } else {
        alert("miss")

    }
}
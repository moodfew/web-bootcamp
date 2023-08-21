function randomNumber() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}


var randomNumber1 = randomNumber();
var randomDice1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDice1);

var randomNumber2 = randomNumber();
var randomDice2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


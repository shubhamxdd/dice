function diceRoll() {
var randomNumber1 = Math.round(Math.random() * 5) + 1 ;
document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`)
}

butn.addEventListener("click", diceRoll)
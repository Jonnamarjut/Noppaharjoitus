document.addEventListener("DOMContentLoaded", function() {

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const newImage = "img/" + randomNumber + ".png"

    document.getElementById("diceImg").src = newImage 

}

document.getElementById("dice").addEventListener("click", rollDice)

})
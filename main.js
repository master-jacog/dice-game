var playerOneDice = document.querySelector(".img1");
var playerTwoDice = document.querySelector(".img2");

var playerOneRoll = null;
var playerTwoRoll = null;


var Winner = "";

function updateImage(){
    let playerOneDiceImage = "./images/dice" + playerOneRoll + ".png"
    let playerTwoDiceImage = "./images/dice" + playerTwoRoll + ".png"

    playerOneDice.src = playerOneDiceImage
    playerTwoDice.src = playerTwoDiceImage

    
};

function rollDice(){
    playerOneRoll = Math.ceil(Math.random() * 6)
    playerTwoRoll = Math.ceil(Math.random() * 6)

    updateImage()
}

console.log(rollDice());

function calculateWinner(playerOneRoll, playerTwoRoll){
    if (playerOneRoll > playerTwoRoll){
        console.log("Player One wins!")
    }else if(playerOneRoll === playerTwoRoll) {
        console.log("it is a tie :(")
    }else{
        console.log("Player Two wins!")
    }
}




rollDice()
calculateWinner(playerOneRoll, playerTwoRoll);
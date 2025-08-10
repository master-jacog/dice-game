var playerOneDice = document.querySelector(".img1");
var playerTwoDice = document.querySelector(".img2");

var playerOneRoll = null;
var playerTwoRoll = null;


var Winner = document.querySelector("#Winner") ;



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

    return [playerOneRoll, playerTwoRoll];
};

function calculateWinner(playerOneRoll, playerTwoRoll){
    if (playerOneRoll > playerTwoRoll){
        Winner.textContent = "Player One wins!"
    }else if(playerOneRoll === playerTwoRoll) {
        Winner.textContent = "It is a tie :("
    }else{
        Winner.textContent = "Player Two wins!"
    }
};

const [p1, p2] = rollDice();
calculateWinner(p1, p2);
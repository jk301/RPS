// rock-paper-scissors (in console)
function getComputerChoice() {
    let result = Math.floor(Math.random() * 3) + 1;

    if (result === 1){
        return "rock"
    } else if (result === 2){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(choice) {
    let userChoice = choice;

    if (userChoice === 1) {
        return "rock"
    } else if (userChoice === 2) {
        return "paper"
    } else if (userChoice === 3) {
        return "scissors"
    } else {
        return "invalid"
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, ComputerChoice) {
  
   switch(true) {
    case (ComputerChoice === humanChoice):
        result.textContent = 
`Its a tie!\n
Player's choice : ${humanChoice}\n
Computer's choose : ${ComputerChoice}\n
Scores: Player = ${humanScore}, Computer = ${computerScore}`
        break;

    case (ComputerChoice == "rock" && humanChoice == "paper"):
        humanScore++;
        result.textContent = 
`Player wins!\n
Player's choice : ${humanChoice}\n
Computer's choose : ${ComputerChoice}\n
Scores: Player = ${humanScore}, Computer = ${computerScore}`
        break;
    
    case (ComputerChoice == "paper" && humanChoice == "scissors"):
        humanScore++;
        result.textContent = 
`Player wins!\n
Player's choice : ${humanChoice}\n
Computer's choose : ${ComputerChoice}\n
Scores: Player = ${humanScore}, Computer = ${computerScore}`
        break;
    
    case (ComputerChoice == "scissors" && humanChoice == "rock"):
        humanScore++;
        result.textContent = 
`Player wins!\n
Player's choice : ${humanChoice}\n
Computer's choose : ${ComputerChoice}\n
Scores: Player = ${humanScore}, Computer = ${computerScore}`
        break;
    
    case (humanChoice === "invalid"):
        result.textContent = "Invalid choice by player, now die";
        break;

    default:
        computerScore++;
        result.textContent = 
`Player lost!\n
Player's choice : ${humanChoice}\n
Computer's choose : ${ComputerChoice}\n
Scores: Human = ${humanScore}, Computer = ${computerScore}`
        break;
   }
}

function playGame() {
    if (humanScore < 5 && computerScore >= 5) {
        result.textContent = `Player lost, Computer wins. \nPlayer score : ${humanScore} \nComputer score : ${computerScore}\n`
        disableButtons();

    } else if (humanScore >= 5 && computerScore < 5) {
        result.textContent = `Player wins, Computer lost. \nPlayer score : ${humanScore}\nComputer score : ${computerScore}\n`
        disableButtons();
    }
}

function disableButtons () {
    rockButton.disabled = true;
    scissorsButton.disabled = true;
    paperButton.disabled = true;
    result.appendChild(resetButton);
}

// UI 

const container = document.querySelector(".container");
container.textContent = "  5 points to win the game.  ";

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const butttonContainer = document.createElement("div");

const resetButton = document.createElement("button");
resetButton.textContent = "Try again";

let result = document.createElement("div");
result.textContent = "Select an option above";
result.style.whiteSpace = "pre";

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

container.appendChild(butttonContainer);
butttonContainer.appendChild(rockButton);
butttonContainer.appendChild(paperButton);
butttonContainer.appendChild(scissorsButton);
butttonContainer.appendChild(result);

rockButton.addEventListener("click", () => {
    playRound(getHumanChoice(1), getComputerChoice());
    playGame();
});
paperButton.addEventListener("click", () => {
    playRound(getHumanChoice(2), getComputerChoice());
    playGame();

});
scissorsButton.addEventListener("click", () => {
    playRound(getHumanChoice(3), getComputerChoice());
    playGame();
});

resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    result.textContent = "Choose an option";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    resetButton.remove();
});

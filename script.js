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

function getHumanChoice() {
    let userChoice = +(prompt("Choose the number :\n rock (1)\n paper (2)\n scissors (3)"));

    if (userChoice === 1) {
        return "rock"
    } else if (userChoice === 2) {
        return "paper"
    } else if (userChoice === 3) {
        return "scissors"
    } else {
        return alert("Invalid choice")
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, ComputerChoice) {
    humanChoice = humanChoice.toLowerCase()
  
   switch(true) {
    case (ComputerChoice === humanChoice):
        console.log(`Its a tie!\n
            Your choice: ${humanChoice}\n
            Computer's choose: ${ComputerChoice}\n
            Scores: Player = ${humanScore}, Computer = ${computerScore}`)
        break;

    case (ComputerChoice == "rock" && humanChoice == "paper"):
        humanScore++;
        console.log(`Player wins!\n
            Player's choice: ${humanChoice}\n
            Computer's choose: ${ComputerChoice}\n
            Scores: Player = ${humanScore}, Computer = ${computerScore}`)
        break;
    
    case (ComputerChoice == "paper" && humanChoice == "scissors"):
        humanScore++;
        console.log(`Player wins!\n
            Player's choice: ${humanChoice}\n
            Computer's choose: ${ComputerChoice}\n
            Scores: Player = ${humanScore}, Computer = ${computerScore}`)
        break;
    
    case (ComputerChoice == "scissors" && humanChoice == "rock"):
        humanScore++;
        console.log(`Player wins!\n
            Player's choice: ${humanChoice}\n
            Computer's choose: ${ComputerChoice}\n
            Scores: Player = ${humanScore}, Computer = ${computerScore}`)
        break;

    default:
        computerScore++;
        console.log(`Player lost!\n
            Player's choice: ${humanChoice}\n
            Computer's choose: ${ComputerChoice}\n
            Scores: Human = ${humanScore}, Computer = ${computerScore}`)
        break;
   }
}

function playGame() {
    let round = +(prompt("How many rounds ? : "))

    for (let i = 1; i <= round; i ++){
        console.log(`Round : ${i}`)
        playRound(getHumanChoice(), getComputerChoice())
    }
    if (humanScore === computerScore) {
        console.log(`Its a tie. \n
            Player score : ${humanScore}\n
            Computer score : ${computerScore}`)
    } else if (humanScore > computerScore) {
        console.log(`Player wins, Computer lost. \n
            Player score : ${humanScore}\n
            Computer score : ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`Player lost, Computer wins. \n
            Player score : ${humanScore}\n
            Computer score : ${computerScore}`)
    }
}

playGame()
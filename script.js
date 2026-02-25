
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

console.log(getComputerChoice())
console.log(getHumanChoice())
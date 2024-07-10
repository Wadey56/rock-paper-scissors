let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {

    // get a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerChoice;

    switch (randomNumber) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors"
            break;
    }

    return computerChoice;

}

function getHumanChoice() {

    let humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = humanChoice.toLowerCase();

    if ((humanChoice != "rock") && (humanChoice != "paper") && (humanChoice != "scissors")) {
        return getHumanChoice();
    } else {
        return humanChoice;
    }

}
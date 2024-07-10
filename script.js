let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {

    // get a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerChoice;

    // convert number to game option
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

    // ask user for input and set lowercase format
    let humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = humanChoice.toLowerCase();

    // if user input is invalid re-call the function
    if ((humanChoice != "rock") && (humanChoice != "paper") && (humanChoice != "scissors")) {
        return getHumanChoice();
    } else {
        return humanChoice;
    }

}

function playRound(computerChoice, humanChoice) {
    
    if (computerChoice == humanChoice) {
        console.log(`It's a draw ${computerChoice} matches ${humanChoice}`);
    } else if (
        (computerChoice == "rock" && humanChoice == "scissors") ||
        (computerChoice == "paper" && humanChoice == "rock") ||
        (computerChoice == "scissors" && humanChoice == "paper")
    ) {
        console.log(`The computer wins, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        console.log(`The computer wins, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

}
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {

    // get a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerChoice;

    // convert number to game option
    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors"
            break;
    }

    return computerChoice;

}

function playRound(computerChoice, humanChoice) {

    // display final scoring message
    if (computerScore == 5) {
        console.log(`Computer wins with ${computerScore} points against your ${humanScore}`);
        return;
    } else if (humanScore == 5) {
        console.log(`You win with ${humanScore} against the computer's ${computerScore}`);
        return;
    }
    
    // compare choices to determine winner
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
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

}


function playGame() {

    // loop 5x to refresh both computer and human choices and pass to playRound()
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
    }

}

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(getComputerChoice(), btn.value)
    })
})
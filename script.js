
// Make a function computerPlay()
function computerPlay(){
    // Randomly select either Rock, Paper, Scissors
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    // Return selected choice
    return computerChoices[randomNumber];
}

// Make a function playRound() with input parameter as playerSelection, computerSelection
function playRound(playerSelection, computerSelection){
    // Make playerSelection and computerSelection case insesitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // Evalute both parameters and store result
    let roundResult = "";
    if ((playerSelection == "rock" && computerSelection == "scissors") 
        || (playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")){
            roundResult = `You Win, ${playerSelection} beats ${computerSelection}.`;
    } else if ((computerSelection == "rock" && playerSelection == "scissors")
        || (computerSelection == "paper" && playerSelection == "rock")
        || (computerSelection == "scissors" && playerSelection == "paper")){
            roundResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == computerSelection){
        roundResult = "It's a Tie.";
    } else {
        roundResult = "Invalid Selection";
    }
    // Return result
    return roundResult;
}

// Make a function game()
function game(){
    // Call playRound() function 5 times and track scores for each round
    let roundOutcome;
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++){
        // Get user Input for playerSelection
        let playerChoice = window.prompt("Enter your choice: Rock, Paper or Scissors");
        // Set computerSelection equal to computerPlay
        let computerChoice = computerPlay();
        roundOutcome = playRound(playerChoice, computerChoice);
        console.log(roundOutcome);
        if (roundOutcome.search("Win") > 0){
            playerScore += 1;
        } else if (roundOutcome.search("Lose") > 0){
            computerScore += 1;
        }
        console.log(`Current Score is Player ${playerScore} : Computer ${computerScore}`);
    }

    // Display winner
    if (playerScore > computerScore){
        console.log(`You Win the Game.\nFinal Score is Player ${playerScore} : ${computerScore} Computer.`);
    } else if (computerScore > playerScore){
        console.log(`You Lose the Game.\nFinal Score is Player ${playerScore} : ${computerScore} Computer.`);
    } else {
        console.log(`The Game ended as Tie.\nFinal Score is Player ${playerScore} : ${computerScore} Computer.`);
    }
}

// Call game() function
game();
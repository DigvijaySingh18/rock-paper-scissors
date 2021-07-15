let playerScore = 0;
let computerScore = 0;


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
            playerScore += 1;
            roundResult = `You Win, ${playerSelection} beats ${computerSelection}.`;
    } else if ((computerSelection == "rock" && playerSelection == "scissors")
        || (computerSelection == "paper" && playerSelection == "rock")
        || (computerSelection == "scissors" && playerSelection == "paper")){
            computerScore += 1;
            roundResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == computerSelection){
        roundResult = "It's a Tie.";
    } else {
        roundResult = "Invalid Selection";
    }
    
    // Store round information
    displayDiv.textContent = roundResult;
    scoreDiv.textContent = `Current Score is Player ${playerScore} : Computer ${computerScore}`;

    // Check for Winner
    if (playerScore == 5 || computerScore == 5){
        // Remove play options
        rock.parentElement.removeChild(rock);
        paper.parentElement.removeChild(paper);
        scissors.parentElement.removeChild(scissors);

        // Display Game winner
        if (playerScore == 5){
            winnerDiv.textContent = `You Win the Game.\nFinal Score is Player ${playerScore} : ${computerScore} Computer.`;
        } else if (computerScore == 5){
            winnerDiv.textContent = `You Lose the Game.\nFinal Score is Player ${playerScore} : ${computerScore} Computer.`;
        }
        
        // Choice to restart the Game
        let delayinMilliseconds = 1000;
        
        setTimeout(function() {
            let playAgain = confirm("Do you want to play again?");
        if (playAgain){
            window.location.reload();
        }
        }, delayinMilliseconds);
        
    }
    
}


const container = document.querySelector("#container");
const displayDiv = document.createElement("div");
const scoreDiv = document.createElement("div");
const winnerDiv = document.createElement("div");


container.appendChild(displayDiv);

container.appendChild(scoreDiv);

container.appendChild(winnerDiv);


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


rock.addEventListener("click", () => playRound("Rock", computerPlay()));
paper.addEventListener("click", () => playRound("Paper", computerPlay()));
scissors.addEventListener("click",() => playRound("Scissors", computerPlay()));

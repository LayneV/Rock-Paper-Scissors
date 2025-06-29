function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let computerChoice = getRandomInt(3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("rock,paper, or scissors?");
  return humanChoice.toLowerCase();
}

function playGame() {
      let humanScore = 0,
    computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
      case "rock":
        if (computerChoice == "rock") {
          console.log("It's a tie!");
        } else if (computerChoice == "paper") {
          computerScore++;
          console.log("You lose! Paper beats rock.");
        } else {
          humanScore++;
          console.log("You win! Rock beats Scissors.");
        }
        break;
      case "paper":
        if (computerChoice == "paper") {
          console.log("It's a tie!");
        } else if (computerChoice == "rock") {
          humanScore++;
          console.log("You win! Paper beats Rock.");
        } else {
          computerScore++;
          console.log("You lose! Scissors beats Paper.");
        }
        break;
      case "scissors": {
        if (computerChoice == "scissors") {
          console.log("It's a tie!");
        } else if (computerChoice == "rock") {
          computerScore++;
          console.log("You lose! Rock beats Scissors.");
        } else {
          humanScore++;
          console.log("You win! Scissors beats paper.");
        }
        break;
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let  computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
}
console.log("Final Scores:");
console.log("Human:", humanScore);
console.log("Computer:", computerScore);
}
playGame()






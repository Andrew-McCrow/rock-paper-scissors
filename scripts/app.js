
// Returns the player's choice using prompt (assumes valid input)
function getHumanChoice() {
  const choice = prompt('Enter rock, paper, or scissors:');
  return choice ? choice.trim().toLowerCase() : choice;
}

// Returns computers choice - one of: 'rock', 'paper', or 'scissors' (random)
function getComputerChoice() {
  // Math.random() returns [0, 1). Split into three equal ranges.
  const r = Math.random();
  if (r < 1/3) return 'rock';
  if (r < 2/3) return 'paper';
  return 'scissors';
}

// Play a complete game of 5 rounds
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
  // Helper function to play one round (now has access to scores)
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a draw!");
      return 'draw';
    }
    
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      return 'win';
    }
    
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
    return 'lose';
  }

  // Play 5 rounds
  for (let round = 1; round <= 5; round++) {
    console.log(`\nRound ${round}:`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
  }

  // Declare the winner
  console.log('\nGame Over!');
  if (humanScore > computerScore) {
    console.log(`You win the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`Computer wins the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`);
  } else {
    console.log(`It's a tie! Final score - Human: ${humanScore}, Computer: ${computerScore}`);
  }
}

// Start the game
playGame();


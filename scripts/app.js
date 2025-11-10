
// Wait until DOM is ready before querying elements or binding events.
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-choice]');
  const roundResult = document.querySelector('#round-result');
  const scoreDisplay = document.querySelector('#running-score');
  const gameWinner = document.querySelector('#game-winner');
  const winningScore = 5;

  let humanScore = 0;
  let computerScore = 0;
  let gameOver = false;

  buttons.forEach((button) => {
    // Each button triggers a round with its corresponding choice.
    button.addEventListener('click', () => playRound(button.dataset.choice));
  });

  function getComputerChoice() {
    const r = Math.random();
    if (r < 1 / 3) return 'rock';
    if (r < 2 / 3) return 'paper';
    return 'scissors';
  }

  function playRound(humanChoice) {
    if (gameOver) return;

    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
      roundResult.textContent = `It's a draw! You both chose ${humanChoice}.`;
    } else if (humanWins(humanChoice, computerChoice)) {
      humanScore++;
      roundResult.textContent = `You win! ${capitalize(humanChoice)} beats ${computerChoice}.`;
    } else {
      computerScore++;
      roundResult.textContent = `You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`;
    }

    scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    checkForWinner();
  }

  function humanWins(humanChoice, computerChoice) {
    return (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    );
  }

  function checkForWinner() {
    if (humanScore === winningScore || computerScore === winningScore) {
      gameOver = true;
      const playerWon = humanScore === winningScore;

      gameWinner.textContent = playerWon
        ? 'You reached 5 points. You win the game!'
        : 'Computer reached 5 points. Better luck next time!';

      disableButtons(true);
    }
  }

  function disableButtons(disabled) {
    buttons.forEach((button) => {
      button.disabled = disabled;
    });
  }

  function capitalize(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
  }
});

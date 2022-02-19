function computerPlay() {
  function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }

  switch(randomNumber()) {
    case 1:
      return 'Rock';

    case 2:
      return 'Paper';

    case 3:
      return 'Scissors';
  }
}

function playerPlay() {
  let playerSelection = prompt('Rock, Paper or Scissors?')
  playerSelection = playerSelection.toLowerCase();
  return playerSelection[0].toUpperCase() + playerSelection.slice(1);
}

function playRound(playerSelection, computerSelection) {

  let winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
  let loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;

  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return loseMessage;
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return winMessage;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return winMessage;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return loseMessage;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return loseMessage;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return winMessage;
  } else {
    return 'It\'s a Draw!';
  }
}

alert(playRound(playerPlay(), computerPlay()));
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  switch(randomNumber) {
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

  let playerWin = 'playerWin';
  let computerWin = 'computerWin';

  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return computerWin;
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return playerWin;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return playerWin;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return computerWin;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return computerWin;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return playerWin;
  } else {
    return 'draw';
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {

    switch (playRound(playerPlay(), computerPlay())) {
      case ('playerWin'):
        playerScore++;
        console.log(`Player wins this round! Current score is ${playerScore}:${computerScore}`);
        break;

      case ('computerWin'):
        computerScore++;
        console.log(`Computer wins this round! Current score is ${playerScore}:${computerScore}`);
        break;

      case ('draw'):
        console.log(`Draw! Current score is ${playerScore}:${computerScore}`);
        break;
    }
  }

  if (playerScore > computerScore) {
    console.log('The Player Wins!');
  } else if (playerScore < computerScore) {
    console.log('The Computer Wins!');
  } else {
    console.log('It\'s a Draw!');
  }
}

game();
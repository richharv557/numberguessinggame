const guessDisplay = document.querySelector('#guesses');
const statusDisplay = document.querySelector('#status');

addButtonListener()

function randomNumber() {
  return Math.floor(Math.random() * 101);
}

function userInput() {
  return prompt('Enter a number from 0 to 100')
}

function addButtonListener() {
    const button = document.querySelector('#btn')
    button.addEventListener('click', () => {
      playGame();
    });
}

function validateInput(userInput) {
  let guess = userInput
    while (guess == null || guess < 0 || guess > 100 || isNaN(guess)) {
      guess = prompt('Invalid. Enter a number from 0 to 100')
  } 
  return guess
}

function tooHighTooLow(guess,randomNumber,statusDisplay) {
  if (guess == randomNumber) {
      alert('That\'s exactly right!');
      return 'win'
  } else if (guess < randomNumber) {
      alert('Too low.');
      return 'continue'
  } else {alert('Too high.');
      return 'continue'
  }
}

function playGame () {
  const random = randomNumber();
  let guesses = 0;
  let outcome = 'continue';
  while (guesses < 10 && outcome == 'continue') {
    guess = validateInput(userInput());
    outcome = tooHighTooLow(guess,random,statusDisplay);
    guesses++;
  }
  if (outcome == 'win') {
      statusDisplay.textContent = 'You WON!!!'
  } else {statusDisplay.textContent = `You lost. The correct number was ${random}.`}

}
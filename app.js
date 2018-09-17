/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
*/

// Game values
let winningNum  = 2,
    guessesLeft = 3,
    min         = 1,
    max         = 10;

// UI Elements
const   UIgame      = document.querySelector('#game'),
        minNum      = document.querySelector('.min-num'),
        maxNum      = document.querySelector('.max-num'),
        guessBtn    = document.querySelector('#guess-btn'),
        guessInput  = document.querySelector('#guess-input'),
        message     = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', guessValue);

function guessValue(){
    let guess = parseInt(guessInput.value);
    
    // Validate input
    if(guess === winningNum){
        setMessage(`${winningNum} is correct!`, 'green');
        // Disable input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = 'green';
    } else if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
        guessInput.style.borderColor = 'red';
    } else{
        setMessage('You have guessed incorrectly.', 'red');
        guessInput.style.borderColor = 'red';
    }
}

function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}
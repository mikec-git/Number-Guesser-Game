/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
*/

// Game values
let min         = 3,
    max         = 10,
    guessesLeft = 3,
    winningNum  = Math.floor(Math.random()*(max-min+1) + min);

// UI Elements
const   game        = document.querySelector('#game'),
        minNum      = document.querySelector('.min-num'),
        maxNum      = document.querySelector('.max-num'),
        guessBtn    = document.querySelector('#guess-btn'),
        guessInput  = document.querySelector('#guess-input'),
        message     = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event listener
game.addEventListener('mousedown', playAgain);

// Listen for guess
guessBtn.addEventListener('click', guessValue);

function guessValue(){
    let guess = parseInt(guessInput.value);
    
    // Validate input
    if(guess === winningNum){
        gameOver(`${winningNum} is correct, you Won!`, 'green');
    } else if(isNaN(guess)){
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
    } else{
        wrongGuess();
        if(guessesLeft === 0){
            gameOver(`Game over. The correct answer was ${winningNum}.`, 'red');
        } else{
            setMessage(`You have guessed incorrectly. (${guessesLeft} guesses left)`, 'red');
        }    
    }
}

function playAgain(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
}

function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}

function wrongGuess(){
    guessesLeft--;
    guessInput.value = '';
    guessInput.style.borderColor = 'red';
}

function gameOver(message, color){
    setMessage(message, color);
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    
    // Play Again
    guessBtn.value = "Play Again";
    guessBtn.className += 'play-again';
}
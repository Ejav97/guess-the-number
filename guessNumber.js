
const randomNumber = Math.floor(Math.random() * 100 + 1);

let attempts = 0;

function guessNumber(){
    const userGuess = parseInt(document.getElementById('userInput').value);

    attempts++;

    let result = "";
    if (userGuess === randomNumber){
        result =`Correct! You guessed the number in ${attempts} attempts.`
    } else if (userGuess < randomNumber){
        result = `Too low! Try again.`
    } else if (userGuess > randomNumber){
        result = `Too high! Try again.`
    } else{
        result =` Please enter a valid number`
    }
    document.getElementById('result').innerText = result;

    document.getElementById('userInput').value = '';

};

const input = document.getElementById('userInput');

input.addEventListener('keyup', function(event){
    if (event.key === 'Enter') {
        guessNumber();
    }
});
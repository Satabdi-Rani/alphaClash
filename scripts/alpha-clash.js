// function play(){
//     // hide the home screen and 
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);
//     // show the play ground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     // playGround.classList.add('block');
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    // console.log("playerpressed", playerPressed);
    // stop the game if escape
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedalphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedalphabet);

    // check matched or not
    if(playerPressed === expectedalphabet){
        // update score
        // get the core, increment score, show the update score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        const currentScore = getTextElementValueById('current-score');

        // // Increment score
        const updatedScore = currentScore +1;

        // // Set the score
        // currentScoreElement.innerText = newScore;
        setTextElementValueById('current-score', updatedScore);

        // start new round
        removeBAckGroundColorById(expectedalphabet);
        continueGame();

    }
    else{
        console.log("lost it");
        // get the current ;ife number 
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
        //   const currentLifeElement = document.getElementById('current-life');
        //   const currentLifeText = currentLifeElement.innerText;
        //   const currentLife = parseInt(currentLifeText);
        
        // // reduce the life count
        //  const newLife = currentLife -1;

        // // display the life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    // Generate a random Alphabet
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    // set random generate alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set bg color
    setBAckGroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // Clear the last selected alphabet
    const currentalphabet = getElementTextById('current-alphabet');
    removeBAckGroundColorById(currentalphabet);
}




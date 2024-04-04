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

function continueGame(){
    // Generate a random Alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    // set random generate alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set bg color
    setBAckGroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}


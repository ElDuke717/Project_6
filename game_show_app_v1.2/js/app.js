const querty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const startScreen = document.querySelector(".start");
const missed = 0;

const phrases = [
    "the first item",
    "the second item",
    "the third item",
    "the fourth item"
];



//return a random phrase from an array
const getRandomPhraseAsArray = arr => {

}

//adds the letters of a string to the display
const addPhraseToDisplay = arr => {

}

//check if a letter is in the phrase
const checkLetter = button => {

}

//check if the game has been won or lost
const checkWin = () => {

}

//listen for the start game button to be pressed
// startButton.addEventListener('click', () => {

// });

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});

btnReset.addEventListener('click', () => {
    startScreen.style.display = "none";
});

//first stab at the first function - I have to review JavaScript and the DOM. 

// function score() {
//     let gameState;
//     if (missed = 0) {
//         gameState = "keep playing";
//     } else (missed <= 5) {
//         gameState = "Game Over";
//     }
// }


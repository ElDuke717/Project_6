const querty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const startScreen = document.querySelector(".start");
const missed = 0;

const phrases = [
    "Coronavirus Pandemic",
    "Presidential Election",
    "West Coast Wildfires",
    "US Based Crewed Spaceflight",
    "Phosphine on Venus",
    "RIP Eddie Van Halen",
    "Social Distancing",
    "What a mess"
];


//return a random phrase from an array
const getRandomPhraseAsArray = arr => {
    let rand = (Math.floor(Math.random(phrases.length)*phrases.length));
    return phrases[rand];
}

//console.log(getRandomPhraseAsArray());



//adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    const text = getRandomPhraseAsArray();
    const ul = document.getElementById('phrase');
    const li = document.createElement('li');
    li.textContent = text.split('');
    ul.appendChild(li);
    li.classList.add("liphrase");
    // let checkli = document.querySelector('.liphrase').textContent;
    // let split = checkli.split("");
    // checkli = split;
    
}

//Add the phrase to the page.
addPhraseToDisplay();
console.log(addPhraseToDisplay());


//check if a letter is in the phrase
const checkLetter = button => {
    let checkli = document.querySelector('.liphrase').textContent;
    let match;
    //for (let i < 0; li.length; i++)
}

//Testing to see if text can be pulled from list item that was created.
// let checkli = document.querySelector('.liphrase').textContent;
// console.log(checkli);
// let split = checkli.split("");
// console.log(split);

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




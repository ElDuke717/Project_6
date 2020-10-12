const querty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const startScreen = document.querySelector(".start");
const missed = 0;

const phrases = [
    "coronavirus pandemic",
    "presidential election",
    "west coast wildfires",
    "us based crewed spaceflight",
    "phosphine on venus",
    "rip eddie van halen",
    "social distancing",
    "what a mess"
];


//This returns a random phrase from the phrases array, then makes an array from
//the phrases' letters. 
const getRandomPhraseAsArray = arr => {
    let rand = (Math.floor(Math.random(phrases.length)*phrases.length));
    return phrases[rand].split('');
}
//This confirms that it works:
//console.log(getRandomPhraseAsArray());



//Adds the letters from the getRandomPhraseAsArray funtion and adds them to an 
//unordered list, each letter a list item with the class ".letter" or ".space"
const addPhraseToDisplay = arr => {
    const letterArray = getRandomPhraseAsArray();
    const listElement = document.querySelector('#phrase ul');
    const numberOfListItems = letterArray.length;
//this loop goes through and adds a list item with a letter for each letter from
//the random phrase.    
    for (let i = 0; i < numberOfListItems; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = letterArray [i];
        phrase.appendChild(listItem);
//This if statement tests whether the character is a letter or space, then adds it
//as a classname.      
        if(listItem.textContent !== ' ') {
            listItem.className = 'letter';
        } else {
            listItem.className = 'space';
        }
    } 
}
//Adds the phrase to the page with the letters separated.
addPhraseToDisplay();


//check if a letter is in the phrase
const checkLetter = button => {
    let letterLi = document.querySelectorAll('.letter');
    let match = null;
    for (let i = 0; i < letterLi.length; i++) {
        let letters = letterLi[i];
        let letterMatch = letters.textContent;
    
    let keyButtons = document.getElementsByTagName('BUTTON');
    for (let i = 0; i < keyButtons.length; i++) {
        let  buttons = keyButtons[i];
        let buttonMatch = buttons.textContent;
    
        if (letterMatch === buttonMatch) {
            letterLi.className = 'show';
            match = letterMatch;
        }
    }
}

}


checkLetter();

//test to see if letters are pulle out of phrase
let letterLi = document.querySelectorAll('.letter');
     for (let i = 0; i < letterLi.length; i++) {
        let letters = letterLi[i];
        let letterMatch = letters.textContent;
        console.log(letterMatch);
    }
//test to see if letters are pulled from the buttons. 
let keyButtons = document.getElementsByTagName('BUTTON');
    for (let i = 0; i < keyButtons.length; i++) {
        let  buttons = keyButtons[i];
        let buttonMatch = buttons.textContent;
        console.log(buttonMatch);
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




const querty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const startScreen = document.querySelector(".start");
const title = document.querySelector('.title');
const changePhrase = document.querySelector('.changePhrase')
let missed = 0;
const overlay = document.querySelector('#overlay');

const phrases = [
    "BTS Dynamite",
    "Coronavirus pandemic",
    "Presidential election",
    "Western wildfires",
    "SpaceX crewed spaceflight",
    "The Weeknd Blinding Lights",
    "Phosphine on Venus",
    "RIP Eddie Van Halen",
    "Social Distancing",
    "RIP Ruth Bader Ginsburg"
];

btnReset.addEventListener('click', () => {
    startScreen.style.display = "none";
});


//This returns a random phrase from the phrases array, then makes an array from
//the phrases' letters. 
const getRandomPhraseAsArray = arr => {
    let rand = (Math.floor(Math.random(phrases.length)*phrases.length));
    return phrases[rand].split('');
}

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
    //Adding this line in to add buttons variable

    for (let i = 0; i < letterLi.length; i++) {
        let letters = letterLi[i];
        let letterMatch = letters.textContent.toLowerCase();
        if (button === letterMatch) {
            letters.classList.add('show');
            match = true;
        }  
    }
    return match;
};


//listen for the start game button to be pressed
// startButton.addEventListener('click', () => {

// });

//listen for the onscreen keyboard to be clicked and show a letter when chosen
qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
        let match = checkLetter(e.target.textContent);
        console.log(match);
    //This changes the appearance of the hearts based on whether the letters chosen are correct or incorrect.
        if (match === null) {
            missed++ ;
            let hearts = document.querySelectorAll('img');
            hearts[missed - 1].src = 'images/lostHeart.png';
    }
  }
  checkWin();
});


//check if the game has been won or lost
const checkWin = () => {
    const letterLi = document.querySelectorAll('.letter');
    let showLi = document.querySelectorAll('.show');
        //This compares the number of letters from the random phrase with the number of shown letters.
        //when they are equal (meaning all letters have been picked) a "won" screen appears.
        if (letterLi.length === showLi.length) {
            //this changes to the overlay to a win screen.
            overlay.style.display = 'flex';
            overlay.classList.add('win');
            title.textContent = 'You Win!';
            changePhrase.textContent = 'Hopefully 2021 will be less exciting 😁';
        //This block of code adds a (an anchor tag with the class .btn__reset, like the start button). 
        //It hides the start button and replaces it with a button that asks the player to play again while
        //functioning like the start button.  
                let btnReplay = document.createElement('a');
                btnReplay.className = 'btn__reset';
                overlay.appendChild(btnReplay);
                document.querySelector('.btn__reset').style.visibility = 'hidden';
                btnReplay.textContent = 'Play again?';
                title.textContent = 'Well done, you won!';
                    btnReplay.addEventListener ('click', () => {
                    document.location.reload(true);
                });
            }
        //This is very similar to the code above, except that when the variable "match" is greater than 5 from
        //the null addition above, it makes this code run.  It runs independantly from the hearts. 
        if (missed >= 7) {
            overlay.style.display = 'flex';
            overlay.classList.add('lose');
            title.textContent = 'You lost 😟';
            changePhrase.textContent = 'Why don\'t you try again? 😁'
                let btnReplay = document.createElement('a');
                btnReplay.className = 'btn__reset';
                overlay.appendChild(btnReplay);
                document.querySelector('.btn__reset').style.visibility = 'hidden';
                btnReplay.textContent = 'Play again?';
                    btnReplay.addEventListener ('click', () => {
                    document.location.reload(true);
                });
            
            }
}





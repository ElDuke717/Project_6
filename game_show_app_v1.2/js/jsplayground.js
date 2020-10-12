//This is where I store all the code I'm experimenting and playing around with. It helps me figure things out.


/*This tests to make sure that my function works and generates a 
random number each time that is > 0 and <=5.
// for (let i=0; i < 100; i++) {
// let userRand = (Math.floor(Math.random(phrases.length)*5));
// console.log(userRand);
// }*/

//first stab at the first function - I have to review JavaScript and the DOM. 

// function score() {
//     let gameState;
//     if (missed = 0) {
//         gameState = "keep playing";
//     } else (missed <= 5) {
//         gameState = "Game Over";
//     }
// }

//Here's the for loop that we need to use to add the characters from the phrase to the page:
let text = getRandomPhraseAsArray();
for (var i = 0; i < text.length; i++) {
    console.log(text.charAt(i));
}

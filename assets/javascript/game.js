$(document).ready(function() {
    // example code for jquery use 
    /*$("#click-me").on("click", function() {
      var randomNum = Math.floor(Math.random() * 1000) + 1;

      $("#test-div").text(randomNum);
    });*/

    // counter for numOfWins
    var counter_wins = 0;
    //counter for remaining number of guesses
    var counter_guesses = 0;
    // array of words to be guessed
    var spaceItems = ["Galaxy", "Orion", "Nebula", "Asteroid"];
    // variable of array to display the random word to be guessed (as " _ _ _ _ _")
     var blankWord = [];
    // variable to randomize the word in the array
    var randomNum = Math.floor(Math.random() * spaceItems.length);
    var randomWord = spaceItems[randomNum];
    console.log(randomNum + ' ' + randomWord);

    // code for word being guessed turning into an array and displaying "fill in the blank" characters
    randomWord.split('').forEach(function(letter, i) {
        blankWord[i] = " _ ";
        console.log(blankWord);

        $('#current-word').append(blankWord);
    });    

    // jquery event handler for when a key is pressed, if its the correct guess, populate this empty array with the correct character at the right index


    /*$()
    function 

    function fnumOfWins() {
    	$('.num-of-wins').
    	numOfWins++;
    } */

  });
  

/*var userGuess = "e";
var blankWord = "_____".split("");
console.log(blankWord.join(''));
var wordToGuess = "peter";

if (wordToGuess.includes(userGuess)) {
  console.log("this is a correct guess");

  wordToGuess.split("").forEach(function(item, itemIndex) {
     console.log('On iteration ' + itemIndex + ' the letter of WordToGuess is ' + item);

    if (userGuess === item) {
      blankWord[itemIndex] = userGuess;
    } else {
      console.log('wrong guess');
    }
  });
  
  console.log(blankWord.join(''));
}
*/
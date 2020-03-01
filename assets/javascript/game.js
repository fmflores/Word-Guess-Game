$(document).ready(function() {
   
    var wordToGuess;
    var userGuess;
    // counter for numOfWins
    var counterWins = 0;
    var losses = 0;
    //counter for remaining number of guesses
    var numOfGuesses;
    // array of words to be guessed
    var spaceItems = ["Galaxy", "Orion", "Nebula", "Asteroid"];
    // variable of array to display the random word to be guessed (as " _ _ _ _ _")
     var blankWord = [];

     var lettersGuessed = [];
    
    // variable to randomize the word in the array
    var randomNum = Math.floor(Math.random() * spaceItems.length);
    var randomWord = spaceItems[randomNum];

    var lettersLeftToGuess = randomWord.length;

    console.log(randomNum + ' ' + randomWord);
    function gameStart() {
      blankWord = [];
      $('#current-word').text("");
      $('#num-of-wins').text(counterWins);
      $('#guessesRemaining').text(numOfGuesses);
      numOfGuesses = 5;
    // code for word being guessed turning into an array and displaying "fill in the blank" characters
    randomWord.split('').forEach(function(letter, i) {
        blankWord[i] = " _ ";
        lettersGuessed[i] = "_";
    });    
    console.log(blankWord);
    $('#current-word').append(blankWord);
    $("#letters-guessed").text(lettersGuessed);
    // jquery event handler for when a key is pressed, if its the correct guess, populate this empty array with the correct character at the right index
    wordToGuess = randomWord;
    
   }
   gameStart();
    $(document).keypress(function(e) {
      if (numOfGuesses > 0) {
      if (e.which !== 0) {
          //alert("Character was typed. It was: " + String.fromCharCode(e.which));
          userGuess = String.fromCharCode(e.which);
          
          
          //console.log(e.which);
           console.log(userGuess);
         
          lettersGuessed.forEach(function(item, itemIndex) {
            if (lettersGuessed.length === itemIndex + 1) {
              lettersGuessed[itemIndex] = userGuess + '_';
            } else {
              lettersGuessed[itemIndex] = userGuess;
            }
          });
          $("#letters-guessed").text(lettersGuessed);
          if (wordToGuess.includes(userGuess)) {
            // console.log("this is a correct guess");
          // console.log(wordToGuess.split(""));
            wordToGuess.split("").forEach(function(item, itemIndex) {
              //  console.log('On iteration ' + itemIndex + ' the letter of WordToGuess is ' + item);
          
              if (userGuess === item) {
                blankWord[itemIndex] = userGuess;
              } else {
                // console.log('wrong guess');
              }
            });
            
            //console.log(blankWord.join(''));
            $('#current-word').text(blankWord.join(''));

            lettersLeftToGuess--;
            if  (lettersLeftToGuess === 0) {
              counterWins++;
              gameStart();


            }

          } else {
            console.log("wrong");
            numOfGuesses--;
            $('#guessesRemaining').text(numOfGuesses);
            if  (numOfGuesses === 0) {
              losses++;
              gameStart();
            }
            
          }
         } 
      }
  });
  //console.log(userGuess);
  });
  
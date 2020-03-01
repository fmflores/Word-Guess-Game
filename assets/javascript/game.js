$(document).ready(function() {
  var wordToGuess;
  var userGuess;
  var wins = 0;
  var losses = 0;
  var numOfGuesses;
  // array of words to be guessed
  var spaceItems = ["galaxy", "orion", "nebula", "asteroid"];
  // variable of array to display the random word to be guessed (as " _ _ _ _ _")
  var blankWord = [];
  var lettersGuessed = [];
  // variable to randomize the word in the array
  var randomNum = Math.floor(Math.random() * spaceItems.length);
  var randomWord = spaceItems[randomNum];
  var old_html = $("#test-div").html();

  var lettersLeftToGuess = randomWord.length;

  // console.log(randomNum + " " + randomWord);

  function gameStart() {
    // console.log(randomNum + " " + randomWord);
    blankWord = [];
    numOfGuesses = 5;
    $("#current-word").text("");
    $("#num-of-wins").text(wins);
    $("#guessesRemaining").text(numOfGuesses);
    // code for word being guessed turning into an array and displaying "fill in the blank" characters
    randomWord.split("").forEach(function(letter, i) {
      blankWord[i] = " _ ";
      lettersGuessed[i] = " _";
    });
    console.log(blankWord);
    $("#current-word").append(blankWord);
    $("#letters-guessed").append(lettersGuessed);
    wordToGuess = randomWord;
  }
  gameStart();

  $(document).keypress(function(e) {
    $("#test-div").html(old_html);
    randomNum = Math.floor(Math.random() * spaceItems.length);
    randomWord = spaceItems[randomNum];
    if (numOfGuesses > 0) {
      if (e.which !== 0) {
        //alert("Character was typed. It was: " + String.fromCharCode(e.which));
        userGuess = String.fromCharCode(e.which);
        //userGuess.toLowerCase();

        console.log(randomWord);
        console.log(userGuess);

        lettersGuessed.forEach(function(item, itemIndex) {
          if (lettersGuessed.length === itemIndex + 1) {
            lettersGuessed[itemIndex] = userGuess + "_";
          } else {
            lettersGuessed[itemIndex] = userGuess;
          }
        });
        $("#letters-guessed").text(lettersGuessed);
        if (wordToGuess.includes(userGuess)) {
          wordToGuess.split("").forEach(function(item, itemIndex) {
            //  console.log('On iteration ' + itemIndex + ' the letter of WordToGuess is ' + item)
            if (userGuess === item) {
              blankWord[itemIndex] = userGuess;
            } else {
              // console.log('wrong guess');
            }
          });

          $("#current-word").text(blankWord.join(""));
          $("#letters-guessed").text(lettersGuessed.join(""));
          console.log(lettersGuessed.join(""));
          lettersLeftToGuess--;
          if (lettersLeftToGuess === 0) {
            wins++;
            gameStart();
          }
        } else {
          console.log("wrong");
          numOfGuesses--;
          $("#guessesRemaining").text(numOfGuesses);
          if (numOfGuesses === 0) {
            losses++;
            $("#test-div").html("YOU LOSE!!!! THE WORD WAS " + randomWord);
            gameStart();
          }
        }
      }
    }
  });
});

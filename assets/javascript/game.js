

var computerChoices= ['a', 'b', 'c','d', 'e', 'f', 'g','h', 'i','j', 'k','l', 'm' ,'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var wins = 0;
var losses = 0;
var correctGuess = true;
var numGuess = 0; 



console.log(computerChoices.length);
// var userChoice = event.key;
// console.log(userChoice);

document.onkeyup = function(event) {
  
    // Determines which key was pressed.
    // var userChoice = event.key;
    var userGuess = event.key;
    console.log(userGuess)

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)

    // Only run the following code block if the user presses "r" or "p" or "s".
      if ((userGuess === computerGuess)) {

        // Alert the userGuess and computerGuess
        alert("User guess: " + userGuess);
        alert("Computer guess: " + computerGuess);

      }

}



// if(correctGuess.indexOf(aphla.toLowerCase()) > -1){
//     alert(variableforcorrectguess + 'is exactly what I was thinking !');     
// }

// else  {
//   document.write( userChoice + "ain't it " + numGuess + 'more to go!');
// }


// char[] alpha = "abcdefghijklmnopqrstuvwxyz".toCharArray();
// psuedo code 
/* create an onkey function?
/store on key  info and display it?
/create a random alphabet generator
/create number to guess
/create a loop for 9 guesses ? 
/create if true statement
/store number of wins 
/store number of loss
Good Luck you can do it !*/


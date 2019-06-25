

var computerChoices= ['b', 'c','d', 'e', 'f', 'g','h', 'i','j', 'k','l', 'm' ,'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
console.log(computerChoices.length);
     // I need to reduce computerChoices or game will go on forever.
    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var numGuess = 0; 



document.onkeyup = function(event) {
  
    // Determines which key was pressed.
  
    var userGuess = event.key;
    console.log(userGuess)

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)

    // Only run the following code block if the user presses "r" or "p" or "s".
      if ((userGuess === computerGuess)) {

        // Alert the userGuess and computerGuess
        alert(userGuess + " is the correct! You are psychic");
        // userGuessText.textContent = "You chose: " + userGuess;
        wins++;
        console.log(wins)
      
      }

      else {
        alert("That ain't it")
        losses++;
        console.log("losses:" + losses)
      
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
/* create an onkey function? DONE
/store on key  info and display it?
/create a random alphabet generator
/create number to guess
/create a loop for 9 guesses ? 
/create if true statement
/store number of wins 
/store number of loss
Good Luck you can do it !*/



var computerChoices= ['a', 'b', 'c', 'd']
// var computerChoices= ['b', 'c','d', 'e', 'f', 'g','h', 'i','j', 'k','l', 'm' ,'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
console.log(computerChoices.length);
     // I need to reduce computerChoices or game will go on forever.
    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
var numberOfChoices = ['9', '8', '7', '6', '5', '4', '3', '2', '1']
console.log(numberOfChoices);    

var wins = 0;
var losses = 0;
var userGuessed = [];
// var userGuess =("");



// var userChoiceText = document.getElementById("userchoice-text");
// var computerChoiceText = document.getElementById("computerchoice-text");
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)





  

document.onkeyup = function(event) {
  
    // Determines which key was pressed.
  
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    console.log(userGuess);
    var userGuessed = [""];
    
    
    // console.log('number of choices left' + i);
    // console.log(numberOfChoices[i]);
    
    // document.getElementById = function() {
    //  (local var) userGuess =(multiGuess[i])
    // };
    
   
    // Only run the following code block if the user presses "r" or "p" or "s".
    
    // for (var i = 0; i < numberOfChoices.lenth; i++){
    if (userGuess === computerGuess) {
        //  userGuess = storeUserguess
        // Alert the userGuess and computerGuess
        alert(userGuess + " is correct. You are a psychic!");
        // userGuessText.textContent = "You chose: " + userGuess;
        wins++;

        // document.getElementById("wins-text");
        console.log("wins:" + wins);
        document.getElementById("wins").innerHTML = wins;
        // break;
      
      
      }
    
      else {
        userGuessed.push(String.fromCharCode(userGuess));   
        alert("that ain't it");
        // userGuessed.push(String.fromCharCode(userGuess));
        losses++;
        console.log("losses:" + losses);
        console.log(userGuessed);
        document.getElementById("losses").innerHTML = losses;

      } 
    // }
      
    }
      

    //loop hasn't been established 
    // wins and losses are displaying on html , clears on refresh only. 
      
    
  //   function random_number(num) {  // New function called random_choice that takes one parameter, num (or a number)
  //     // Get a random number between 0 and a passed-in number
  //     var num = num || 4  // If no number passed in, default to 4
  //     return Math.floor(Math.random() * num); // Round the answer down (floor) of a random number between 0 and 1 and multiply it by a number. Then return a value and exit the function.
  // }




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

/create a loop for 9 guesses ? 
/create if true statement
/store number of wins 
/store number of loss
Good Luck you can do it !*/

/*questions :
is there a shorter way to write the array?*/
// How to I get computer guess to hold 1 guess for the user's nine choices

/// userGuess = ""  empty string
/// then pass these 



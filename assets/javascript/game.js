
var computerChoices= ['a', 'b', 'c','d', 'e', 'f', 'g','h', 'i','j', 'k','l', 'm' ,'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
console.log(computerChoices.length);
var computerGuess;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log('computer guess :  ' + computerGuess)

var numberOfChoices = 9;
console.log(numberOfChoices);

var wins = 0;
var losses = 0;
var userGuess
var letter = []
  

function reset() {
  // reset letter or userGuess
  // 
  letter = []
  document.getElementById("userGuess").innerHTML = letter;
  numberOfChoices = []
  document.getElementById("numberOfChoices").innerHTML = numberOfChoices;
  //
}

    document.onkeyup = function(event) {

    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    console.log(userGuess);
    letter.push(userGuess);

    document.getElementById("userGuess").innerHTML = letter;

      
        if (userGuess === computerGuess ) {
          alert(userGuess + "  is correct. You are psychic!");
          wins++;
          document.getElementById("wins").innerHTML = wins;
          console.log("wins:" + wins);
           reset ()
      
           }
          
        
          
        
        
        else {
          numberOfChoices = numberOfChoices - 1;
          console.log("numberOfChoices : " + numberOfChoices )
          alert("that ain't it");
          console.log("losses:" + losses);
          
          document.getElementById("numberOfChoices").innerHTML = numberOfChoices;
          if (numberOfChoices === 0) {
            losses++;
            document.getElementById("losses").innerHTML = losses;         
            console.log("losses  : " + losses);
            reset ()
          }
          

          

          }
        }
      
    
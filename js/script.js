// Variables declarations
var wordBank = ["blue","red","orange","shark","arpegios","milestone","flowers","bumblebee"];
var underScore = [];
//var maxLives = 5; 
var remainingLives = 5;
var guessWord = [];
var guessedLetter =[];
var endGame = false; 
var gameStart = false;
var win = false;
document.getElementById("startbut").style.visibility = "hidden";


// function 
function reset(){
    document.getElementById("startbut").style.visibility = "visible";

    endGame = false;
    win = false;
    gameStart = true;
    hidden = "visible";
    //remainingLives = maxLives;
    guessedLetter = [];
    guessWord = [];
    underScore = [];
    guessWord = wordBank[Math.floor(Math.random() * wordBank.length)].split("") ; 
    for(var i = 0; i < guessWord.length; i++){
        underScore.push("_");
    }
    document.getElementById("beginprompt").textContent = "Guess the letter below";
    button = document.getElementById("startbut");
    button.textContent = "Restart";
    
    document.getElementById("hiddenmessage2").textContent = " ";
    document.getElementById("intro").textContent = "Please enter a letter to guess"
    updateDisplay();
    
}
function updateDisplay(){
    document.getElementById("underscore").textContent = underScore.join(" "); 
    document.getElementById("lives").textContent = remainingLives; 
    document.getElementById("hiddenmessage").textContent = " ";
    document.getElementById("inputletter").value = ""; 
    document.getElementById("hangmanpic").src = "assets/" + remainingLives + ".png";
    
}

function makeGuess(inputLetter){
    var inputRaw = document.getElementById("inputletter").value;
    var inputLetter = inputRaw.toLowerCase();
    if(guessWord.length === 0){
        document.getElementById("hiddenmessage2").textContent = "Please click button to begin";

    }
    if(remainingLives > 0 ){
        if(/[^a-zA-Z\-\/]/.test(inputLetter)){
            document.getElementById("hiddenmessage2").textContent = "Not a letter, try again";

        }
        
        else if(guessedLetter.indexOf(inputLetter) === -1 && inputLetter.length === 1){
            guessedLetter.push(inputLetter);
            for(var i = 0; i < guessWord.length; i++){
    
                if(inputLetter === guessWord[i]){
                    underScore[i] = inputLetter;
                    document.getElementById("hiddenmessage2").textContent = "Well Done!! ";
                }
                
            }
            if(guessWord.indexOf(inputLetter) === -1){
                remainingLives -= 1;
                document.getElementById("hiddenmessage2").textContent = "Sorry, try again";
            }
        }      
        else if(inputLetter.length > 1){
            document.getElementById("hiddenmessage2").textContent = "Please enter only 1 letter. ";
        }
        else if(inputLetter.length <1){
            document.getElementById("hiddenmessage2").textContent = "Please enter a letter. ";

        }
        
        else{
            document.getElementById("hiddenmessage2").textContent = "You already typed this in, try something else. ";
        }
    } 
   
        updateDisplay();
        checkWin();
        checkLoss();
    }

function checkWin(){
    if(underScore.indexOf("_") === -1 && guessedLetter.length > 0){
        win = true;
        document.getElementById("hiddenmessage").textContent = "Congratulation ! You win !!"
        document.getElementById("hiddenmessage2").textContent = " ";

    }
}
function checkLoss(){
    if(remainingLives === 0){
        document.getElementById("hiddenmessage").textContent = "You lose, try again :("
        document.getElementById("hiddenmessage2").textContent = " ";

    }
}


function hideButton(){
}

// Variables declarations
var wordBank = ["blue","red","orange"]
var underScore = [];
var maxLives = 5; 
var remainingLives = 0;
var guessWord = [];
var guessedLetter =[];
var endGame = false; 
var gameStart = false;
var win = false;


// function 
function reset(){
    endGame = false;
    win = false;
    gameStart = true;
    remainingLives = maxLives;
    guessedLetter = [];
    guessWord = [];
    underScore = [];
    guessWord = wordBank[Math.floor(Math.random() * wordBank.length)].split("") ; 
    for(var i = 0; i < guessWord.length; i++){
        underScore.push("_");
    }
    document.getElementById("startBut").textContent = "Restart";
    document.getElementById("hiddenMessage2").textContent = " ";
    updateDisplay();
}
function updateDisplay(){
    document.getElementById("underScore").textContent = underScore.join(" "); 
    document.getElementById("lives").textContent = remainingLives; 
    document.getElementById("hiddenMessage").textContent = " ";
    document.getElementById("inputLetter").value = ""; 
    
}

function makeGuess(inputLetter){
    var inputRaw = document.getElementById("inputLetter").value;
    var inputLetter = inputRaw.toLowerCase();
    if(remainingLives > 0 ){
        if(/[^a-zA-Z0-9\-\/]/.test(inputLetter)){
            document.getElementById("hiddenMessage2").textContent = "Not a letter, try again";

        }
        
        else if(guessedLetter.indexOf(inputLetter) === -1 && inputLetter.length === 1){
            guessedLetter.push(inputLetter);
            for(var i = 0; i < guessWord.length; i++){
    
                if(inputLetter === guessWord[i]){
                    underScore[i] = inputLetter;
                    document.getElementById("hiddenMessage2").textContent = "Well Done!! ";
                }
                
            }
            if(guessWord.indexOf(inputLetter) === -1){
                remainingLives -= 1;
                document.getElementById("hiddenMessage2").textContent = "Sorry, try again";
            }
        }      
        else if(inputLetter.length > 1){
            document.getElementById("hiddenMessage2").textContent = "Please enter only 1 letter. ";
        }
        else if(inputLetter.length <1){
            document.getElementById("hiddenMessage2").textContent = "Please enter a letter. ";

        }
        
        else{
            document.getElementById("hiddenMessage2").textContent = "You already typed this in, try something else. ";
        }
    } 
   
        updateDisplay();
        checkWin();
        checkLoss();
    }

function checkWin(){
    if(underScore.indexOf("_") === -1){
        win = true;
        document.getElementById("hiddenMessage").textContent = "Congratulation ! You win !!"
        document.getElementById("hiddenMessage2").textContent = " ";

    }
}
function checkLoss(){
    if(remainingLives === 0){
        document.getElementById("hiddenMessage").textContent = "You lose, try again :("
        document.getElementById("hiddenMessage2").textContent = " ";

    }
}

function addElement(){
    var button = document.createElement("button")
    var text = document.createTextNode("Guess")
    button.appendChild(text);
    var main = document.getElementsByTagName("main");
    main.appendChild("button");
}

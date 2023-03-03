// computer player must return output randomly of rock paper or scissors
// create function called getComputerChoice
// provide rock paper scissors as possible parameters
// make it return one randomly 
const arrayRPS = ["Rock","Paper","Scissors"];

function getComputerChoice() {
    let randRPS = Math.floor(Math.random()*arrayRPS.length); // chooses random index # for array
    let computerChoice = arrayRPS[randRPS]; //inputs the random index# and assigns an array item to computerSelection
    return computerChoice; //randomly returns rock paper or scissors 
}

function getPlayerChoice() { 
    let playerTypes =prompt("rock paper or scissors?");
    let firstLetter = playerTypes[0].toUpperCase(); //create variable with just the first letter capitalized
    let restOfLetters = playerTypes.slice(1); // create variable with every letter after the first 
        restOfLetters =restOfLetters.toLowerCase(); // make the rest of letters lowercase
    let playerChoice = firstLetter + restOfLetters; //append first letter to rest of letters to create Cap plus rest lowercase
    return playerChoice;
    
}


function roundRPS(playerChoice,computerChoice) {
    playerChoice=getPlayerChoice();
    computerChoice=getComputerChoice();
    if(playerChoice === computerChoice) {
       console.log("Tie");

    }
    else if(playerChoice ==="Rock"){
        if(computerChoice==="Paper"){
            console.log(`Looks like you lose!${computerChoice} beats ${playerChoice}.`)   ; 
        }
        else if(computerChoice==="Scissors"){
            console.log(`You win!${playerChoice} beats ${computerChoice}.`);
        }
    }
    else if (playerChoice ==="Paper"){
        if(computerChoice==="Scissors"){
            console.log(`Looks like you lose!${computerChoice} beats ${playerChoice}.`);
        }
        else if(computerChoice==="Rock"){
            console.log(`You win!${playerChoice} beats ${computerChoice}.`);
        }
    }
    else if (playerChoice==="Scissors"){
        if(computerChoice==="Rock"){
            console.log(`Looks like you lose!${computerChoice} beats ${playerChoice}.`);
        }
        else if(computerChoice==="Paper"){
            console.log(`You win!${playerChoice} beats ${computerChoice}.`);
        }
    }
    else {
        console.log("illegal text");
    }
}


function game() {
    for (let i=0;i<5; i++){
        roundRPS();
    }

}
game();
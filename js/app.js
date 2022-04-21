
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const resultText = document.getElementById("start-text");
const machineImg = document.getElementById("machine-img");

let i = "";

rockBtn.addEventListener("click", ()=> {
    play(ROCK);
})
paperBtn.addEventListener("click", ()=> {
    play(PAPER);
})
scissorsBtn.addEventListener("click", ()=> {
    play(SCISSORS);
})


function play(userOption) {

    resultText.innerHTML = "decidint el teu destí...";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".svg";
    }, 150);

    setTimeout (function(){

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

    machineImg.src = "img/" + machineOption + ".svg";

    switch(result){
        case TIE:
            resultText.innerHTML = "Empates, ho has de tornar a provar";
        break;
        case WIN:
            resultText.innerHTML = "Has guanyat! et salves porc...";
        break;
        case LOST:
            resultText.innerHTML = "Has perdut! BEU jagger!!";
        break;
    }
    }, 2500);

}

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcResult(userOption, machineOption) {

    if(userOption === machineOption ) {
        return TIE;

    } else if(userOption === ROCK) {

        if( machineOption === PAPER) 
        return LOST;
        if( machineOption === SCISSORS)
        return WIN; 

    } else if(userOption === PAPER) {
        
        if ( machineOption === ROCK) 
        return WIN;
        if( machineOption === SCISSORS)
        return LOST; 

    } else if(userOption === SCISSORS) {
        
        if ( machineOption === ROCK) 
        return LOST;
        if( machineOption === PAPER)
        return WIN; 
    }
}


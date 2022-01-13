const choices = document.querySelectorAll('.choice');
// this puts all the choices into an array - because of "all"
const score = document.querySelector('#score')
const result = document.querySelector('#result')
const restart = document.querySelector('#restart')
const modal = document.querySelector('.modal')

const scoreboard = {
    player: 0,
    computer: 0
}


// const playersChoice = choices.target.id;

// Play Game
// ('e' is event paramater)
function play(e) {
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice, winner)
    showWinner(winner, computerChoice);
}
const rando = Math.floor( Math.random() * 3)
// Get Computers Choice

function getComputerChoice() {
    const computerChoice = Math.floor( Math.random() * 3)
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }

}

// is it possible to use switch statment instead???
// switch (computerChoice) {
//     case 0:
//         computerChoice = 'rock'
//         break;
//     case 1:
//         computerChoice = 'paper'
//         break;
//     case 2:
//         computerChoice = 'scissors'
//         break;
// };



// -----------Get Game Winner!


function getWinner(p, c) {
    if (p === c) {
        return "its a tie!";
    } else if (
        (p === 'rock' && c === 'paper') ||
        (p === 'scissors' && c === 'rock') ||
        (p === 'paper' && c === 'scissors')) {
        return "computer";

    } else if (
        (p === 'paper' && c === 'rock') ||
        (p === 'rock' && c === 'scissors') ||
        (p === 'scissors' && c === 'paper')) {
        return "player";
    }
};

function showWinner(winner, computerChoice, playerChoice) {
    if(winner === 'player') {
        // increment player score
        scoreboard.player++
        // show modal result
        result.innerHTML = `
        <h1 class ="text-win">You win! </h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong </p>
        `;
    } else if (winner === 'computer') {
         // increment computer score
         scoreboard.computer++
         // show modal result
         result.innerHTML = `
         <h1 class ="text-lose">You lose!</h1>
         <i class="fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer chose <strong>${computerChoice}</strong </p>
        
         `;
    } else  {
        result.innerHTML = `
        <h1>Its a tie!  </h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong </p>

        `;
    }
    // show score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    
    `;
    modal.style.display = 'block';
}

// Clear modal
function clearModal(e) {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
}


// // Event Listeners (2 ways of writing it, for of or for each loop...)

// choices.forEach(choice => choice.addEventListener('click', play));

for (let choice of choices) {
    choice.addEventListener('click', play);
}

window.addEventListener('click', clearModal)
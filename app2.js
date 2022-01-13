
// let userScore = 0;
// let computerScore = 0;

// let computerChoice = Math.floor(Math.random() * 3);

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


// function compareFunction(choice1, choice2) {
//     if (
//         (choice1 === choice2)) {
//         return "its a tie!";
//     } else if (
//         (choice1 === 'rock' && choice2 === 'paper') ||
//         (choice1 === 'scissors' && choice2 === 'rock') ||
//         (choice1 === 'paper' && choice2 === 'scissors')) {
//         computerScore++;
//         return "Computer wins, you lose!";

//     } else if (
//         (choice1 === 'paper' && choice2 === 'rock') ||
//         (choice1 === 'rock' && choice2 === 'scissors') ||
//         (choice1 === 'scissors' && choice2 === 'paper')) {
//         userScore++;
//         return "You win, congrats!";
//     }
// };


// const r = Math.floor(Math.random() * 255);
// const g = Math.floor(Math.random() * 255);
// const b = Math.floor(Math.random() * 255);
// const newColor = `rgb(${r}, ${g}, ${b})`;


// const button = document.querySelector('#btnColor');
// const h2 = document.querySelector('h2')
// button.addEventListener('click', function () {
//     const newColor = randomColorMaker();
//     document.body.style.backgroundColor = newColor;
//     h2.innerText = newColor
// })

// let userChoice = prompt("Enter rock paper or scissors").toLowerCase();

// let userChoice = h2.innerText


// const rockChoice = document.querySelector('#rockChoice')

// rockChoice.addEventListener('click', compareFunction(userChoice, computerScore));

// rockChoice.innerText = compareFunction(userChoice, computerChoice)


// document.querySelector("#the-result").innerText = compareFunction(userChoice, computerChoice);



// const btn1 = document.querySelector('#div1')

// if (btn1.addEventListener('click', function() {
//     return userChoice === 'rock' }
// {
    
// }

// function changeID() {
//     document.querySelector('#div1').id = 'div2';
// }

// if (button.id === 'div2') {
//     userChoice === 'rock'
// }


// if the button's ID is equal to div1, then userchoice is equal to rock, if the button's ID is equal to div2, then userChoice = paper, etc. (change ID through onCLick eventListener)
// // 


// document.getElementById("the-result").innerHTML = compareFunction(userChoice, computerChoice);
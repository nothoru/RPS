let userScore = 0;
let cpuScore = 0;

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "paper";
    case 1:
      return "rock";
    case 2:
      return "scissor";
  }
}

function getHumanChoice() {
  let user = prompt("RPS");
  return user.toLowerCase();
}

function playRound(user, cpu) {
  if (user == "paper" && cpu == "rock") {
    console.log("You won! Paper beats Rock ");
    userScore += 1;
  } else if (user == "rock" && cpu == "scissor") {
    console.log("You won! Rock beats Scissor ");
    userScore += 1;
  } else if (user == "scissor" && cpu == "paper") {
    console.log("You won! Scissor beats Paper ");
    userScore += 1;
  } else if (user == cpu) {
    console.log("Tie");
  } else {
    console.log("You lose! " + cpu + " Beats " + user);
    cpuScore += 1;
  }
}

function playGame() {
  for (let i = 0; i < 5; ++i) {
    const userChoice = getHumanChoice();
    const cpuChoice = getComputerChoice();
    playRound(userChoice, cpuChoice);
    console.log("USER: " + userScore);
    console.log("CPU: " + cpuScore + "\n");
  }
}

playGame();

if (userScore > cpuScore) {
  console.log("You won!");
} else if (cpuScore > userScore) {
  console.log("You lost!");
} else if (userScore == cpuScore) {
  console.log("It's a tie");
}

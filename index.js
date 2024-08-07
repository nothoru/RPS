const rps = ["rock", "paper", "scissor"];

function getComputerChoice() {
  return rps[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let user = prompt("Enter rock, paper, scissor");
  return user.toLowerCase();
}

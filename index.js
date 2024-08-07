const rps = ["rock", "paper", "scissor"];

function getComputerChoice() {
  return rps[Math.floor(Math.random() * 3)];
}

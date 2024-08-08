const rps = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;
const para = document.querySelector(".para");
const cpuDrew = document.querySelector(".cpuDraws");
const userDraws = document.querySelector(".userDraws");

const videoPaths = {
  rock: "vid/rock.mp4",
  paper: "vid/paper.mp4",
  scissor: "vid/scissor.mp4",
};

function getComputerChoice() {
  return rps[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  const videoPlayer = document.querySelector("#videoPlayer");

  videoPlayer.src = videoPaths[computerChoice];
  videoPlayer.style.display = "block";

  videoPlayer.addEventListener("ended", () => {
    if (humanChoice == "paper" && computerChoice == "rock") {
      para.textContent = "You won! Paper beats Rock";
      playerScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
      para.textContent = "You won! Rock beats Scissor";
      playerScore += 1;
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
      para.textContent = "You won! Scissor beats Paper";
      playerScore += 1;
    } else if (humanChoice == computerChoice) {
      para.textContent = `Its a tie`;
    } else {
      para.textContent =
        "You lose! " + computerChoice + " beats " + humanChoice;
      computerScore += 1;
    }
    cpuDrew.textContent = `CPU: ${computerChoice}`;
  });

  userDraws.textContent = `USER: ${humanChoice}`;
}

// function playGame() {
//   let gameOn = true;
//   do {
//     let cpu = getComputerChoice();
//     playRound(user, cpu);

//     if (playerScore == 5 || computerScore == 5) {
//       gameOn = false;
//     }
//   } while (gameOn);
//

let playerOption = document.querySelector("#playerOption");

playerOption.addEventListener("click", (event) => {
  let target = event.target;
  let user;
  switch (target.id) {
    case "rock":
      user = rps[0];
      break;
    case "paper":
      user = rps[1];
      break;
    case "scissor":
      user = rps[2];
      break;
  }

  playRound(user, getComputerChoice());
});

console.log(`USER: ${playerScore}`);
console.log(`CPU: ${computerScore}`);

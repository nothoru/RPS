const rps = ["rock", "paper", "scissor"];
const userScore = document.querySelector("#userScore");
const cpuScore = document.querySelector("#cpuScore");
const para = document.querySelector(".para");
const cpuDrew = document.querySelector(".cpuDraws");
const userDraws = document.querySelector(".userDraws");
const userId = document.querySelector("#userID");
const cpuId = document.querySelector("#cpuID");
let playerScore = 0;
let computerScore = 0;

const videoPaths = {
  rock: "vid/rock.mp4",
  paper: "vid/paper.mp4",
  scissor: "vid/scissor.mp4",
};

const imagePaths = {
  rock: "images/rock.png",
  paper: "images/paper.png",
  scissor: "images/scissor.png",
};

function getComputerChoice() {
  return rps[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  const videoPlayer = document.querySelector("#videoPlayer");

  videoPlayer.src = videoPaths[computerChoice];
  videoPlayer.style.display = "block";
  cpuId.src = "images/random.png";

  userId.src = imagePaths[humanChoice];

  videoPlayer.addEventListener("timeupdate", () => {
    if (videoPlayer.currentTime >= 9 && videoPlayer.currentTime < 9.5) {
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

      userScore.textContent = playerScore;
      cpuScore.textContent = computerScore;

      if (playerScore == 5) {
        document.querySelector(".sample").textContent = "You win!";
      } else if (computerScore == 5) {
        document.querySelector(".sample").textContent = "You lose!";
      }

      cpuId.src = imagePaths[computerChoice];

      videoPlayer.removeEventListener("timeupdate", arguments.callee);
    }
  });
}

let playerOption = document.querySelector("#playerOption");

playerOption.addEventListener("click", (event) => {
  para.textContent = "";

  let target = event.target;
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

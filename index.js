const rps = ["rock", "paper", "scissor"];
const userScore = document.querySelector("#userScore");
const cpuScore = document.querySelector("#cpuScore");
let para = document.createElement("p");
const cpuDrew = document.querySelector(".cpuDraws");
const userDraws = document.querySelector(".userDraws");
const userId = document.querySelector("#userID");
const cpuId = document.querySelector("#cpuID");
let playerScore = 0;
let computerScore = 0;
let isVideoPlaying = false;
const container = document.querySelector(".container");

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

function checkScore(player, computer) {
  if (player == 1) {
    document.querySelector(".sample").textContent = "You win!";
    para.textContent = "YOU WON!";
  } else if (computer == 1) {
    document.querySelector(".sample").textContent = "You lose!";
  }

  document.querySelector("#reset").style.visibility = "visible";
}

function resetRound() {
  playerScore = 0;
  computerScore = 0;
  cpuScore.textContent = computerScore;
  userScore.textContent = playerScore;

  document.querySelector(".sample").textContent = "";
}

function playRound(humanChoice, computerChoice) {
  const videoPlayer = document.querySelector("#videoPlayer");

  computerChoice = "rock"; //debugging purpose

  videoPlayer.src = videoPaths[computerChoice];
  videoPlayer.style.display = "block";
  cpuId.src = "images/random.png";

  userId.src = imagePaths[humanChoice];

  if (
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "scissor") ||
    (humanChoice == "scissor" && computerChoice == "paper")
  ) {
    para.textContent = "You won! " + humanChoice + " beats" + computerChoice;
    playerScore += 1;
  } else if (humanChoice == computerChoice) {
    para.textContent = `Its a tie`;
  } else {
    para.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
    computerScore += 1;
  }

  videoPlayer.addEventListener("timeupdate", () => {
    if (videoPlayer.currentTime >= 9 && videoPlayer.currentTime < 9.5) {
      cpuId.src = imagePaths[computerChoice];

      container.insertBefore(para, container.firstChild);

      videoPlayer.removeEventListener("timeupdate", arguments.callee);

      isVideoPlaying = false;

      cpuScore.textContent = computerScore;
      userScore.textContent = playerScore;

      if (playerScore == 1 || computerScore == 1)
        checkScore(playerScore, computerScore);
    }
  });
}

let playerOption = document.querySelector("#playerOption");

playerOption.addEventListener("click", (event) => {
  if (isVideoPlaying) return;

  isVideoPlaying = true;

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

  container.removeChild(para);
});

document.querySelector("#reset").addEventListener("click", resetRound);

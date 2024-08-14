const rps = ["rock", "paper", "scissor"];
const playerScore = document.querySelector("#playerScore");
const cpuScore = document.querySelector("#cpuScore");
let resultText = document.createElement("h2");
const userImg = document.querySelector("#userImg");
const cpuImg = document.querySelector("#cpuImg");
let playerPoints = 0;
let cpuPoints = 0;
let isVideoPlaying = false;
const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const resetBtn = document.querySelector("#reset");

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
  } else if (computer == 1) {
    document.querySelector(".sample").textContent = "You lose!";
  }

  modal.style.visibility = "visible";

  document.querySelector("#reset").style.visibility = "visible";
}

function resetRound() {
  playerPoints = 0;
  cpuPoints = 0;
  cpuScore.textContent = cpuPoints;
  playerScore.textContent = playerPoints;
}

function playRound(humanChoice, computerChoice) {
  const videoPlayer = document.querySelector("#videoPlayer");

  videoPlayer.src = videoPaths[computerChoice];
  videoPlayer.style.display = "block";

  cpuImg.src = "images/smug.png";
  userImg.src = imagePaths[humanChoice];

  if (
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "scissor") ||
    (humanChoice == "scissor" && computerChoice == "paper")
  ) {
    resultText.textContent =
      "You won! " + humanChoice + " beats " + computerChoice;
    playerPoints += 1;
  } else if (humanChoice == computerChoice) {
    resultText.textContent = `Its a tie`;
  } else {
    resultText.textContent =
      "You lose! " + computerChoice + " beats " + humanChoice;
    cpuPoints += 1;
  }

  videoPlayer.addEventListener("timeupdate", () => {
    if (videoPlayer.currentTime >= 9 && videoPlayer.currentTime < 9.5) {
      cpuImg.src = imagePaths[computerChoice];

      container.insertBefore(resultText, container.firstChild);

      videoPlayer.removeEventListener("timeupdate", arguments.callee);

      isVideoPlaying = false;

      cpuScore.textContent = cpuPoints;
      playerScore.textContent = playerPoints;

      if (playerPoints == 1 || cpuPoints == 1)
        checkScore(playerPoints, cpuPoints);
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

  container.removeChild(resultText);
});

resetBtn.addEventListener("click", () => {
  modal.style.visibility = "hidden";
  resetBtn.style.visibility = "hidden";
  resetRound();
  resultText.textContent = "";
  cpuImg.src = "images/smug.png";
  userImg.src = "images/watamate.png";
  videoPlayer.src = "";
});

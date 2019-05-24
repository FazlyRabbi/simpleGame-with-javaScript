(function() {
  let p1ScoreDisplay = document.getElementById("pyaingScore1");

  let p2ScoreDisplay = document.getElementById("pyaingScore2");

  let widingScore = document.getElementById("fixdScore");

  const inputField = document.getElementById("inputField");

  const p1btn = document.getElementById("p1btn");

  const p2btn = document.getElementById("p2btn");

  const resbtn = document.getElementById("resbtn");

  const winnerr = document.getElementById("winner");

  winnerr.style.visibility = "hidden";

  let p1Score = 0;
  let p2Score = 0;
  let widingScoreD = 5;
  let isWinner = false;

  //create random number
  function createRandomNumber(number) {
    number = Math.floor(number);

    return Math.floor(Math.random() * number);
  }

  //print random number for player1

  function randoms() {
    const rendomNum = createRandomNumber(widingScoreD);

    p1Score += rendomNum;
  }

  //print random number for player2
  function randoms2() {
    const rendomNum = createRandomNumber(widingScoreD);
    p2Score += rendomNum;
  }

  function winner(oldScore, winingScore) {
    if (oldScore === winingScore || oldScore > winingScore) {
      isWinner = true;
      if (p1Score === winingScore || p1Score > winingScore) {
        p1ScoreDisplay.style.color = "green";
        winnerr.textContent =
          " winner winner chicken Dinner!! plyer1 is winner";
      } else if (p2Score === winingScore || p2Score > winingScore) {
        p2ScoreDisplay.style.color = "green";
        winnerr.textContent =
          " winner winner chicken Dinner!! plyer2 is winner";
      }

      p1btn.setAttribute("disabled", "disabled");
      p2btn.setAttribute("disabled", "disabled");
      winnerr.style.visibility = "visible";
    } // p1ScoreDisplay.classList.add("winner");
  }

  //ResetButtonFunction
  function resetBtn() {
    p1Score = 0;
    p2Score = 0;

    p1ScoreDisplay.textContent = "0";
    p2ScoreDisplay.textContent = "0";
    p1ScoreDisplay.style.color = null;
    p2ScoreDisplay.style.color = null;

    p1btn.removeAttribute("disabled");
    p2btn.removeAttribute("disabled");
    winnerr.style.visibility = "hidden";
  }

  // createRandomNumber

  //plyer1 button
  p1btn.addEventListener("click", () => {
    randoms();

    p1ScoreDisplay.textContent = p1Score;

    winner(p1Score, widingScoreD);
  });

  //plyer2 button

  p2btn.addEventListener("click", () => {
    randoms2();

    p2ScoreDisplay.textContent = p2Score;

    winner(p2Score, widingScoreD);
  });

  resbtn.addEventListener("click", () => {
    resetBtn();
  });

  inputField.addEventListener("keypress", function() {
    if (event.keyCode === 13) {
      widingScore.textContent = this.value;
      widingScoreD = Number(this.value);

      event.target.value = "";
    }
  });
})();

// create random number with min and max range

// const result = createRandomNumber(5,10)

// console.log(result);

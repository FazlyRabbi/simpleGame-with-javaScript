(function() {
  let p1ScoreDisplay = document.getElementById("pyaingScore1");

  let p2ScoreDisplay = document.getElementById("pyaingScore2");

  let widingScore = document.getElementById("fixdScore");

  const inputField = document.getElementById("inputField");

  const p1btn = document.getElementById("p1btn");

  const p2btn = document.getElementById("p2btn");

  const resbtn = document.getElementById("resbtn");

  const winnerr = document.getElementById("winner");

  const alert = document.getElementById("alert");
  alert.style.display = "none";

  winnerr.style.visibility = "hidden";


  let p1Score = 0;
  let p2Score = 0;
  let widingScoreD = 5;
  let gameOver = false;

  // create random number


  function createRandomNumber(number) {
    number = Math.floor(number);
     

    return Math.floor(Math.random() * number ) + 1;
  }


  const n1 = createRandomNumber(widingScoreD);

  console.log(n1)
  p1Score += n1;
  //print random number for player1
 

  //print random number for player
console.log(p1Score)

 function randomsRange() {
  const rendomNum = createRandomNumber(widingScoreD - p1Score);

  p1Score += rendomNum;

 
}

//print random number for player
function randomsRange2() {
  const rendomNum = createRandomNumber(widingScoreD - p2Score);
  p2Score += rendomNum;
}






  function winner(oldScore, winingScore) {
    if (oldScore === winingScore) {
      if (p1Score === winingScore) {
        p1ScoreDisplay.style.color = "green";
        winnerr.textContent =
          " winner winner chicken Dinner!! plyer1 is winner";
      } else if (p2Score === winingScore) {
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
    widingScoreD = 5;
    widingScore.textContent = "5"
    p1ScoreDisplay.textContent = "0";
    p2ScoreDisplay.textContent = "0";
    p1ScoreDisplay.style.color = null;
    p2ScoreDisplay.style.color = null;
    
   
    gameOver = false;

    p1btn.removeAttribute("disabled");
    p2btn.removeAttribute("disabled");
    winnerr.style.visibility = "hidden";
    
  }

  // createRandomNumber

  //plyer1 button
  p1btn.addEventListener("click", () => {
    if (!gameOver) {
      randomsRange()
      if (widingScoreD === p1Score || widingScoreD < p1Score) {
        gameOver = true;
        winner(p1Score, widingScoreD);
      }
      p1ScoreDisplay.textContent = p1Score;
    }
  });

  //plyer2 button

  p2btn.addEventListener("click", () => {
    if (!gameOver) {
      randomsRange2()

      if (widingScoreD === p2Score || widingScoreD < p2Score) {
        gameOver = true;
        winner(p2Score, widingScoreD);
      }
      p2ScoreDisplay.textContent = p2Score;
    }
  });

  resbtn.addEventListener("click", () => {
    resetBtn();
    alert.style.display = "none";
  });

  inputField.addEventListener("change", () => {
    resetBtn();
    inputNum = parseInt(inputField.value, 10);
  
    if (inputNum) {
      alert.style.display = "none";
      widingScoreD = Number(inputField.value);
      widingScore.textContent = inputField.value;
    } else {
      alert.style.display = "block";
      
      p1btn.setAttribute("disabled", "disabled");
      p2btn.setAttribute("disabled", "disabled");
      
    }

    inputField.value = " ";
    
  });

})();

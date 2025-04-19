let score = 10;
function Check() {
  const inputElement = document.getElementById("num");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const buttonElement = document.querySelector("button");
  let inputNum = inputElement.value.trim();

  if (inputNum === "") {
    alert("Please Enter a Number!");
    return;
  }
  const num = Number(inputNum);
  if (isNaN(num) || num < 1 || num > 10) {
    alert("Please enter a number between 1-10!");
    return;
  }

  let random = Math.floor(Math.random() * 10) + 1;
  if (random === num) {
    resultElement.innerHTML = "You are Right!";
    resultElement.className = "correct";
    score += 2;
  } else {
    resultElement.innerHTML = "You are Wrong!";
    resultElement.className = "wrong";
    score = Math.max(0, score - 1);
  }
  scoreElement.innerHTML = `Your Score is ${score}`;
  if (score <= 0) {
    resultElement.innerHTML = "Game Over!";
    buttonElement.disabled = true;
    inputElement.disabled = true;
  }
  inputElement.value = "";
}

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.getElementById("btn__reset");
const letterButtons = document.querySelectorAll(".key");

let game;

startButton.addEventListener("click", (e) => {
  game = new Game();
  game.startGame();
});

letterButtons.forEach((letterButton) => {
  letterButton.addEventListener("click", (event) => {
    if (event.target.className === "key") {
      game.handleInteraction(event.target);
    }
  });
});

document.addEventListener("keyup", (e) => {
  const key = e.key.toLowerCase();
  let matchingButton = null;
  for (const letterButton of letterButtons) {
    if (key === letterButton.textContent && !letterButton.disabled) {
      matchingButton = letterButton;
      game.handleInteraction(matchingButton);
      break;
    }
  }
});

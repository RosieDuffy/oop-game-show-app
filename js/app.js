/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.getElementById("btn__reset");
// const letterButton = document.querySelector("#qwerty");

let game;

startButton.addEventListener("click", (e) => {
  game = new Game();
  game.startGame();
});

// letterButton.addEventListener("click", (event) => {
//   if (event.target.className === "key") {
//     game.handleInteraction(event.target);
//   }
// });

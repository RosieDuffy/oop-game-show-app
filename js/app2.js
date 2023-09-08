const startButton = document.getElementById("btn__reset");

let game;

startButton.addEventListener("click", (e) => {
  game = new Game();
  game.startGame();
});

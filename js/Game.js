/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Theres no place like home"),
      new Phrase("You cant handle the truth"),
      new Phrase("Ill have what shes having"),
      new Phrase("Youre gonna need a bigger boat"),
      new Phrase("Ill be back"),
    ];
    this.activePhrase = null;
  }
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
  startGame() {
    const screenOverlay = document.getElementById("overlay");
    screenOverlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  //   /**
  // * Checks for winning move
  // * @return {boolean} True if game has been won, false if game wasn't
  // won
  // */

  checkForWin() {
    const allLetters = document.querySelectorAll(".letter");
    let isWin = true;
    allLetters.forEach((letter) => {
      if (letter.classList.contains("hide")) {
        isWin = false;
      }
    });
    return isWin;
  }

  removeLife() {
    let lifeHearts = document.querySelectorAll(".tries img");

    if (this.missed < 5) {
      lifeHearts[this.missed].src = "images/lostHeart.png";
      this.missed++;
    }

    if (this.missed === 5) {
      this.gameOver();
    }
  }

  gameOver(gameWon) {
    const screenOverlay = document.getElementById("overlay");
    const gameOverMessage = document.getElementById("game-over-message");

    screenOverlay.style.display = "flex";
    if (gameWon === true) {
      screenOverlay.classList.remove("start");
      screenOverlay.classList.add("win");
      gameOverMessage.textContent = "Congratulations, you win!";
    } else {
      screenOverlay.classList.remove("start");
      screenOverlay.classList.add("lose");
      gameOverMessage.textContent = "Sorry, you lost!";
    }
  }

  handleInteraction(button) {
    button.disabled = true;
    const letter = button.textContent;

    if (this.activePhrase.checkLetter(letter) === true) {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin() === true) {
        this.gameOver(true);
      }
    } else {
      button.classList.add("wrong");
      this.removeLife();
    }
  }
}

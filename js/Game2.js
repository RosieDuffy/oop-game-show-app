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
}

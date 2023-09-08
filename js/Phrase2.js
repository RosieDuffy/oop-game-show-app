class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const phraseList = document.querySelector("#phrase ul");
    let phraseHTML = "";

    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] !== " ") {
        phraseHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
      } else {
        phraseHTML += '<li class="space"></li>';
      }
    }
    phraseList.innerHTML = phraseHTML;
    // const phraseLocation = document.getElementById("phrase");

    // this.phrase.split("").forEach((letter) => {
    //   const letterMatch = /[a-zA-Z]/;
    //   if (letter === " ") {
    //     phraseLocation.innerHTML += ' <li class="space"> </li>';
    //   } else if (letterMatch.test(letter)) {
    //     phraseLocation.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
    //   }
    // });
  }

  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
}

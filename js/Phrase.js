/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // Add Phrase To Display  /**
  // * Display phrase on game board
  // */

  addPhraseToDisplay() {
    const phraseLocation = document.getElementById("phrase");

    this.phrase.split("").forEach((letter) => {
      const letterMatch = /[a-zA-Z]/;
      if (letter === " ") {
        phraseLocation.innerHTML += ' <li class="space"> </li>';
      } else if (letterMatch.test(letter)) {
        phraseLocation.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
      }
    });
  }

  //  Check Letter /**
  // * Checks if passed letter is in phrase
  // * @param (string) letter - Letter to check
  // */

  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  // Show Matched Letter /**
  //  * Displays passed letter on screen after a match is found
  //  * @param (string) letter - Letter to display
  //  */

  showMatchedLetter(inputLetter) {
    const allLetters = document.querySelectorAll(".letter");

    allLetters.forEach((letter) => {
      if (letter.textContent === inputLetter) {
        letter.classList.remove("hide");
        letter.classList.add("show");
      }
    });
  }
}

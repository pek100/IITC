const memoryCards = document.querySelectorAll('.memory-card');

let flippedCards = [];
let isFlippedDisabled = false;

function flipCard() {
  if (isFlippedDisabled) return;
  this.classList.add('flip');
  flippedCards.push(this);

  if (flippedCards.length == 2) {
    isFlippedDisabled = true;
    checkForMatch();
  }
}

function checkForMatch() {
  const [card1, card2] = flippedCards;
  const isMatch = card1.dataset.framework === card2.dataset.framework;

  if (isMatch) {
    disableFlippedCards();
  } else {
    setTimeout(() => {
      card1.classList.remove('flip');
      card2.classList.remove('flip');
      isFlippedDisabled = false;
      flippedCards = [];
    }, 1000);
  }
}

function disableFlippedCards() {
  flippedCards.forEach(card => card.removeEventListener('click', flipCard));
  flippedCards = [];
  isFlippedDisabled = false;
}

memoryCards.forEach(card => card.addEventListener('click', flipCard));
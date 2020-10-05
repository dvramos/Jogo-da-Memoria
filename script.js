const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkFroMath();
}

function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCard();
        return;
    }

    unflipCards();
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})


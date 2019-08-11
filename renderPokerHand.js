function renderCard(card) {
  return `<img class="playing-card" src="cards/${card.value + card.suit}.png">`
}

function renderPokerHand(pokerHand) {
    let finalHTML = pokerHand.map(renderCard).join('')
    return `
        <div class="text-center mt-5">
          ${finalHTML}
        </div>
    `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}

let playerMoney = 500;
let playerScore = 0;

document.addEventListener('DOMContentLoaded', () => {
   let moneyField = document.querySelector('#player-money');
   moneyField.textContent = "Money: " + playerMoney;

   let scoreField = document.querySelector('#player-score');
   scoreField.textContent = "Score: " + playerScore; 

   const deck = new Deck();
   console.log(deck.cards[0].value);

   const betBtn = document.querySelector('#bet-button');
   
   betBtn.addEventListener('click', playerBet);
   
   
});

const playerBet = () => {
    let moneyField = document.querySelector('#player-money');
    const betAmount = document.querySelector('#bet-amount').value;
    
    moneyField.textContent = "Money: " + (playerMoney - betAmount);
}

const calcScore = () => {
    
    playerScore = deck.cards[i].value
}


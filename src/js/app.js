let playerMoney = 500;
let playerScore = 0;
let hitCount = 0;
let dealerScore = 0;
let betAmount = 0;


document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  const deck = new Deck();
  deck.shuffle();
  //console.log(deck);
  let moneyField = document.querySelector('#player-money');
  moneyField.textContent = "Money: " + playerMoney;

  const betBtn = document.querySelector('#bet-button');
  
  betBtn.addEventListener('click', playerBet);

  const hit_btn = document.querySelector('.js-hit');

const dealerCards = () => {  
  const cards = document.querySelector('#dealer-hand > .cards');
  const card = document.createElement("div");
  card.innerHTML = `<div class="card face-${deck.cards[hitCount].rank}-of-${deck.cards[hitCount].suit}"></div>`;
  cards.appendChild(card);
  dealerScore = dealerScore + deck.cards[hitCount].value;
  let scoreFieldDealer = document.querySelector('#dealer-hand > .score');
  scoreFieldDealer.textContent = "Score: " + dealerScore; 
  hitCount++

  

}
//dealerCards();
hit_btn.addEventListener('click', ()=>{
  
//const checkScore = () => {
  if(playerScore < 21) {
    // if(hitCount === 1){
    // dealerCards();
    
    if(dealerScore < 17){
      dealerCards();
    }
    const cards = document.querySelector('#player-hand > .cards');
    const card = document.createElement("div");
    
    playerScore = deck.cards[hitCount].value + playerScore;
    let scoreField = document.querySelector('#player-score');
    scoreField.textContent = "Score: " + playerScore; 
    card.innerHTML = `<div class="card face-${deck.cards[hitCount].rank}-of-${deck.cards[hitCount].suit}"></div>`;
    cards.appendChild(card);
    hitCount++;
  

  
  }
  else if(playerScore > 21){
    alert("You lose!");
  }



  

});

let number = Math.floor(Math.random() * 1);

const stand_btn = document.querySelector('.js-stand');
stand_btn.addEventListener('click', ()=>{
  // if ( dealerScore < 17){
  //   dealerCards();
  if(number === 0){
    dealerCards();
  }
  if(dealerScore < 17){
    dealerCards();
  }
  
  if(dealerScore > 21 && playerScore < 21){
    alert("You win");
    moneyField.textContent =  "Money: "+ (parseInt(playerMoney) + parseInt(betAmount));
  }
  
   if(playerScore > 21){
    alert('You lose');
  }

  if(dealerScore < playerScore && playerScore < 21) {
    alert("You win");
    moneyField.textContent =   "Money: " + (parseInt(playerMoney) + parseInt(betAmount));
  }


  if(playerScore === 21){
    alert("Blackjack!")
    moneyField.textContent =  "Money: "+ (parseInt(playerMoney) + parseInt(betAmount));
  }
  console.log(moneyField);

});
});
const playerBet = () => {
    let moneyField = document.querySelector('#player-money');
    betAmount = document.querySelector('#bet-amount').value;
    
    moneyField.textContent = "Money: "+ (playerMoney - betAmount);
}


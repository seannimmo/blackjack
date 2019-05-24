/*
 * A playing card
 */
class Card {
  constructor(rank, suit, value) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }

  mount() {
    const hand = document.querySelector("#player-hand > .cards");
    hand.appendChild(this.render());
  }
  

  render () {
    this.element = document.createElement('div');
    this.element.className = `card face-${rank}-of-${suit}`;
    console.log(this.element.className);
    return this.element; 
  }

} 
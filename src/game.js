// import { Card } from './card';
/* eslint-disable no-unused-vars */
export function Card(picture) {
  this.picture = picture;
  this.isFaceUp = false;
}

export function Game() {
  var listOfCards = [];
  var isComplete = false;
  var pictures = ['hat', 'ball', 'cup', 'star', 'coat'];
  for (var i = 0; i < pictures.length; i++) {
    var card1 = new Card(pictures[i]);
    var card2 = new Card(pictures[i]);
    listOfCards.push(card1, card2);
  }
  console.log(listOfCards);
}

// Game.prototype.shuffle = function() {
//   for (var i = this.listOfCards.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = this.listOfCards[i];
//     this.listOfCards[i] = this.listOfCards[j];
//     this.listOfCards[j] = temp;
//   }
//   return this.listOfCards;
// }
//
// function checkMatch(card1, card2) {
//   if (this.listOfCards[card1].picture == this.listOfCards[card2].picture) {
//     console.log("Cards match");
//   } else {
//     this.listOfCards[card1].isFaceUp = false;
//     this.listOfCards[card2].isFaceUp = false;
//     console.log("Cards don't match");
//   }
// }

// Business Logic Game

// Business Logic Player
function Player(name, total, playerTurn) {
  this.name = name,
  this.total = total,
  this.playerTurn = playerTurn
}

// Roll Function
let roll = 0;
let score = 0;
const rollDice = () => {
  roll = Math.ceil(Math.random() * 6);
  if(roll !== 1) {
    score = score + roll
    console.log(score);
  } else {
    score = 0;
    // endTurn
  }
  console.log(score);
} 

// Add Function

// Hold Function

// EndTurn Function 
Player.prototype.addScore = function(score) {
  this.total += score;
}

// Win Function

// Reload Function

// User Interface Logic

$(document).ready(function() {
  $("#")
});
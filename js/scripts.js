// Business Logic Game
function Game() {
  this.players = []
  this.score = 0;
}
// Game {players: [{name: player1Name, total: 0, playerTurn: true}, {name: player2Name, total: 0, playerTurn: false}]} 
Game.prototype.addPlayer = function(player) {
  this.players.push(player);
}

Game.prototype.findPlayer = function() {
  for (let i = 0; i < this.players.length; i++) {
    if (this.players[i].playerTurn === true) {
      return i;
    }
  }
}

Game.prototype.addScore = function() {
  let i = game.findPlayer();
  console.log(game.score);
  this.players[i].total += game.score;
  console.log(i + " = " + this.players[i].total);
}
// Business Logic Player
function Player(name, total, playerTurn) {
  this.name = name,
  this.total = total,
  this.playerTurn = playerTurn
}

// Roll Function

const rollDice = () => {
  roll = Math.ceil(Math.random() * 6);
  $("#roll").text(roll);
  if(roll !== 1) {                    // Add Function
    game.score = game.score + roll
    console.log(game.score);
  } else {
    game.score = 0;
    endTurn();
  }
  console.log(score);
} 

//endTurn function 
const endTurn = () => {
  let i = game.findPlayer();
  if(i === 0) {
    game.players[0].playerTurn = false;
    game.players[1].playerTurn = true;
  } else {
    game.players[1].playerTurn = false;
    game.players[0].playerTurn = true;
  }
}

// Win Function
const winner = () => {
  let player;
  if (game.players[0].total >= 50 || game.players[1].total >= 50) {
    if (game.players[0].total >= 50) {
      player = game.players[0].name;
    } else if (game.players[1].total >= 50) {
      player = game.players[1].name;
    }
    $("#hold-button").prop("disabled", true);
    $("#roll-button").prop("disabled", true);
    $("#winner-name").text(player);
    $("#game-board").hold();
    $("#play-again-button").show();
  } 
}

// Reload Function
  const reload = () => {
    location.reload();
  }

// User Interface Logic
let game = new Game();

$(document).ready(function() {
  $("#start-game").submit(function(event) {
    event.preventDefault();
    let player1Name = $("input#player1").val();
    let player2Name = $("input#player2").val();

    $("#player1-name").text(player1Name);
    $("#player2-name").text(player2Name);
    $("#start-game").hide();
    $("#game-board").show();

    let player1 = new Player(player1Name, 0, true);
    let player2 = new Player(player2Name, 0, false);
    game.addPlayer(player1);
    game.addPlayer(player2);
  });
  // Roll Button
  $("#roll-button").click(function() {
    rollDice();
    $("#score").text(game.score);  
  });
  // Hold Button
  $("#hold-button").click(function() {
    game.addScore();
    let i = game.findPlayer();
    if(i === 0) {
      $("#player1-total").text(game.players[0].total);
    } else {
      $("#player2-total").text(game.players[1].total);
    }
    winner();
    endTurn();
    game.score = 0;
  });
});

// let playerNums = 
// $("#player" + playerNums[0] + "-total").text(playerNums[1]);
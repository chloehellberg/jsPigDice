// Business Logic Game
function Game() {
  this.players = []
  this.score = 0;
}
// Game {players: [{name: player1Name, total: 0, playerTurn: true}, {name: player2Name, total: 0, playerTurn: false}], score: 0} 
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

Game.prototype.endTurn = function() {
  game.players.forEach(function(e) {
    e.playerTurn === true ? e.playerTurn = false : e.playerTurn = true;
  });
  game.score = 0;
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
  if(roll !== 1) {                    // Add Function
    game.score = game.score + roll
  } else {
    game.score = 0;
    game.endTurn();
  }
  return roll;
} 

// Win Function
const winner = () => {
  let player = false;
  if (game.players[0].total >= 50 || game.players[1].total >= 50) {
    if (game.players[0].total >= 50) {
      player = game.players[0].name;
    } else {
      player = game.players[1].name;
    }
  }
  return player;
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
    let roll = rollDice();
    $("#roll").text(roll);
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

    let win = winner();
    if(win) {
      $("#winner-name").text(win);
      $("#game-board").hide();
      $("#play-again-button").show();
    }

    $("#player1-turn").fadeToggle();
    $("#player2-turn").fadeToggle();

    game.endTurn();
    $("#roll").text("0");
    $("#score").text("0");
  });
});
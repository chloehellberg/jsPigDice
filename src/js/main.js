import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Player from './player.js';
// import { Game } from './game.js';
import { game } from './game.js';

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
    let roll = game.rollDice();
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

    let win = game.winner();
    if(win) {
      $("#winner-name").text(win);
      $("#game-board").hide();
      $("#play-again-button").show();
    }

    game.endTurn();
    $("#roll").text("0");
    $("#score").text("0");
  });
});
import $ from 'jquery';
import { Game } from './../src/js/game.js';

describe('Game', () => {

  test('Should correctly create an object with 2 properties', () => {
    const game = new Game();
    expect(game.players).toEqual([]);
    expect(game.score).toEqual(0);
  })
})
describe('addPlayer', () => {

  test('should correctly push an additional player into the players array', () => {
    const game = new Game();
    const player = {name: "Chloe", total: 0, playerTurn: true};
    game.addPlayer(player);
    expect(game.players[0].name).toEqual("Chloe");
    expect(game.players[0].total).toEqual(0);
    expect(game.players[0].playerTurn).toEqual(true);
  })
})
describe('findPlayer', () => {

  test('should correctly determine which playerTurn equals true', () => {
    const game = new Game();
    game.players[0] = {name: "Chloe", total: 0, playerTurn: true};
    const num = game.findPlayer();
    expect(num).toEqual(0);
  })
})
describe('addScore', () => {

  test('should correctly add score for the round into current players total', () => {
    const game = new Game();
    game.players[0] = {name: "Chloe", total: 0, playerTurn: true};
    game.score = 5;
    game.addScore();
    expect(game.players[0].total).toEqual(5);
  })
})
describe('endTurn', () => {

  test('should change player turn variable into false (if true) and true (if false)', () => {
    const game = new Game();
    game.players[0] = {name: "Chloe", total: 0, playerTurn: true};
    game.players[1] = {name: "Mike", total: 0, playerTurn: false};
    game.endTurn();
    expect(game.players[0].playerTurn).toEqual(false);
    expect(game.players[1].playerTurn).toEqual(true);
  })
})
describe('rollDice', () => {

  test('should correctly post a random number between 1 and 6', () => {
    const game = new Game();
    const roll = game.rollDice();
    expect(roll).toBeGreaterThan(0);
    expect(roll).toBeLessThan(7);
  })
})
describe('winner', () => {

  test('should correctly identify no one has won the game, yet', () => {
    const game = new Game();
    game.players[0] = {name: "Chloe", total: 0, playerTurn: true};
    game.players[1] = {name: "Mike", total: 0, playerTurn: false};
    const result = game.winner();
    expect(result).toEqual(false);
  })
  test('should correctly identify Chloe has won the game', () => {
    const game = new Game();
    game.players[0] = {name: "Chloe", total: 52, playerTurn: true};
    game.players[1] = {name: "Mike", total: 0, playerTurn: false};
    const result = game.winner();
    expect(result).toEqual("Chloe");
  })
  test('should correctly identify Mike has won the game', () => {
    const game = new Game();
    game.players[0] = {name: "Chloe", total: 0, playerTurn: true};
    game.players[1] = {name: "Mike", total: 51, playerTurn: false};
    const result = game.winner();
    expect(result).toEqual("Mike");
  })
})
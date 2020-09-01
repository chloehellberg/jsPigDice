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

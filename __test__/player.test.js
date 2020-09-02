import Player from './../src/js/player.js';

describe ('Player', () => {

  test('should correctly create a player object with two variables', () => {
    const player = new Player('Mike', 0, true);
    expect(player.name).toEqual('Mike');
    expect(player.total).toEqual(0);
    expect(player.playerTurn).toEqual(true);
  });
});


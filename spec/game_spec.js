import Game from "game"
import Player from "player"
import Board from "board"


describe('new Game', function() {
    it('should create a new game with two players and a board', function() {
        var testGame = new Game;
        // console.log(testGame.player1.toString().call(testGame.player1))
        expect(testGame.player1 instanceof Player).toEqual(true);
        expect(testGame.player2 instanceof Player).toEqual(true);
        expect(testGame.board instanceof Board).toEqual(true);
    });
});
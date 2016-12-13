import Board from "board"
import Game from "game"
import Player from "player"


describe('play', function() {
    it('should have each number map to a specific position', function(){
        var testGame = new Game;
        testGame.player1.play(1);
        expect(testBoard.show()[0][0]).toEqual("X")
    });
});
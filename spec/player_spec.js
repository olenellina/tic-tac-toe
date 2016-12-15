import Board from "board"
import Game from "game"
import Player from "player"


describe('play', function() {
    it('can play a word by designating a position with 1-9', function(){
        var testGame = new Game();
        testGame.player1.play("1");
        expect(testGame.board.show()[0][0]).toEqual("x")
    });

    it('throws type error if non-string is passed', function(){
        var testGame = new Game();
        expect(function(){testGame.player1.play(1)}).toThrow(TypeError());
    });

    it('throws error if number other than 1-9 is passed', function(){
        var testGame = new Game();
        expect(function(){testGame.player1.play("10")}).toThrow("ArgumentError");
    });

    it('allows player 1 and 2 to interact with the same board', function(){
        var testGame = new Game();
        testGame.player1.play("1");
        expect(testGame.board.show()[0][0]).toEqual("x");
        testGame.player2.play("2");
        expect(testGame.board.show()[0][0]).toEqual("x");
        expect(testGame.board.show()[0][1]).toEqual("o");
    });

    it('will not allow a player to play on a filled spot', function(){
        var testGame = new Game();
        testGame.player1.play("1");
        expect(function(){testGame.player2.play("1")}).toThrow("InvalidMoveError");
    });

   	it('will not allow a player to play out of turn', function(){
        var testGame = new Game();
        testGame.player1.play("1");
        expect(function(){testGame.player1.play("2")}).toThrow("OutOfTurnError");
    });

    it('will not allow player2 to start the game', function(){
        var testGame = new Game();
        expect(function(){testGame.player2.play("1")}).toThrow("OutOfTurnError");
    });
});

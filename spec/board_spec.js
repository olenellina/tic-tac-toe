import Board from "board"
import Game from "game"
import Player from "player"

describe('Board', function() {

  describe('show', function() {
        it('should return a 2D array', function() {
            var testBoard = new Board;
              expect(testBoard.show().length).toEqual(3);

          for (var i = 0; i < testBoard.show().length; i++){
              expect( Array.isArray(testBoard.show()[i]) ).toEqual(true);
           };
        });

        it('should have 1-9 as sub elements', function() {
            var testBoard = new Board;
            for (var i = 0; i < testBoard.length; i++){
                expect( testBoard[i][0] ).toEqual(i+1);
                expect( testBoard[i][1] ).toEqual(i+2);
                 expect( testBoard[i][2] ).toEqual(i+3);
             };
        });
  });
    describe('isWon', function() {
          it('should return the winning element if a game has been won horizontally', function() {
            var winningBoard = new Board;
            // console.log("hello there");
            winningBoard.boardArray = [["x","x","x"], ["x", "x", "o"], ["o", "o", "x"]];
            expect(winningBoard.isWon()).toEqual("x");
          });
          it('should return the winning element if a game has been won vertically', function() {
            var winningBoard = new Board;
            winningBoard.boardArray = [["x", "x", "o"], ["x", "x", "o"], ["x", "o", "o"]];
            expect(winningBoard.isWon()).toEqual("x");
          });
          it('should return the winning element if a game has been won diagonally', function() {
            var winningBoard = new Board;
            winningBoard.boardArray = [["o", "o", "x"], ["o", "o", "x"], ["x", "x", "o"]];
              expect(winningBoard.isWon()).toEqual("o");
          });
          it('should return false if a game has not been won', function() {
            var winningBoard = new Board;
            winningBoard.boardArray = [["o", "x", "o"], ["x", "x", "o"], ["o", "o", "x"]];
              expect(winningBoard.isWon()).toEqual(false);
          });
          it('should catch a draw and notify users', function() {
            var testGame = new Game();
            testGame.player1.play("2");
            testGame.player2.play("1");
            testGame.player1.play("4");
            testGame.player2.play("3");
            testGame.player1.play("5");
            testGame.player2.play("6");
            testGame.player1.play("7");
            testGame.player2.play("8");
            expect(testGame.player1.play("9")).toEqual("There is a draw. Game Over.");
          });
      });
      describe('clear', function() {
            it('should return the default board array when called', function() {
              var testGame = new Game();
              testGame.player1.play("1");
              expect(testGame.board.show()[0][0]).toEqual("x");
              testGame.board.clear();
              expect(testGame.board.show()[0][0]).toEqual("1");
            });
        });
});

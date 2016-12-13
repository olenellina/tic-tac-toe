import Board from "board"
import Game from "game"

describe('Board', function() {

  describe('show', function() {
        it('should return a 2D array', function() {
        	var testBoard = new Board;
            console.log("testboard:",testBoard.show());
            expect(testBoard.show().length).toEqual(3);
            expect( Array.isArray(testBoard.show()[0]) ).toEqual(true);
        });
    });
    describe('isWon', function() {
      // need to handle draw
          it('should return the winning element if a game has been won horizontally', function() {
            var winningBoard = new Board;
              expect(winningBoard.isWon([["x","x","x"], ["x", "x", "o"], ["o", "o", "x"]])).toEqual("x");
          });
          it('should return the winning element if a game has been won vertically', function() {
            var winningBoard = new Board;
              expect(winningBoard.isWon([["x", "x", "o"], ["x", "x", "o"], ["x", "o", "o"]])).toEqual("x");
          });
          it('should return the winning element if a game has been won diagonally', function() {
            var winningBoard = new Board;
              expect(winningBoard.isWon([["o", "o", "x"], ["o", "o", "x"], ["x", "x", "o"]])).toEqual("o");
          });
          it('should return false if a game has not been won', function() {
            var winningBoard = new Board;
              expect(winningBoard.isWon([["o", "x", "o"], ["x", "x", "o"], ["o", "o", "x"]])).toEqual(false);
          });
          it('should catch a draw and notify users', function() {
            var winningBoard = new Board;
              expect(winningBoard.isWon([["o", 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(false);
              expect(winningBoard.isWon([["o", "x", 3], [4, 5, 6], [7, 8, 9]])).toEqual(false);
              expect(winningBoard.isWon([["o", "x", "o"], [4, 5, 6], [7, 8, 9]])).toEqual(false);
              expect(winningBoard.isWon([["o", "x", "o"], ["x", 5, 6], [7, 8, 9]])).toEqual(false);
              expect(winningBoard.isWon([["o", "x", "o"], ["x", "x", 6], [7, 8, 9]])).toEqual(false);
              expect(winningBoard.isWon([["o", "x", "o"], ["x", "x", "o"], [7, 8, 9]])).toEqual(false);
              expect(winningBoard.isWon([["o", "x", "o"], ["x", "x", "o"], ["o", 8, 9]])).toEqual(false);
              expect(winningBoard.isWon([["o", "x", "o"], ["x", "x", "o"], ["o", "o", 9]])).toEqual(false);
              expect(winningBoard.isWon([["o", "x", "o"], ["x", "x", "o"], ["o", "o","x"]])).toEqual("There is a draw: no winner");
          });
      });
});

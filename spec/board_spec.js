import Board from "game"

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
              expect(winningBoard.isWon([["x", "x", "o"], ["x", "x", "o"], ["o", "o", "x"]])).toEqual("x");
          });
          it('should return false if a game has not been won', function() {
            var winningBoard = new Board;
              expect(winningBoard.isWon([["o", "x", "o"], ["x", "x", "o"], ["o", "o", "x"]])).toEqual(false);
          });
      });
});

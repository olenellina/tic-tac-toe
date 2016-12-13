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
          it('should return true if a game has been won, along with the winning element', function() {
            var winningBoard = new Board;
              expect(winningBoard.isWon([[1, 1, 1], [1, 1, 0], [0, 0, 1]])).toEqual(1);
          });
          it('should return false if a game has not been won', function() {
            var winningBoard = new Board;
              expect(winningBoard.isWon([[0, 1, 0], [1, 1, 0], [0, 0, 1]])).toEqual(false);
          });
      });
});

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
          it('should return true if a game has been won', function() {
            var winningBoard = new Board;
              // console.log("testboard:",testBoard.show());
              expect(winningBoard.isWon([[1, 1, 1], [1, 1, 0], [0, 0, 1]])).toEqual(true);
              // expect( Array.isArray(testBoard.show()[0]) ).toEqual(true);
          });
      });
});

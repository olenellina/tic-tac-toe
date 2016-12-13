import Board from "game"

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
});
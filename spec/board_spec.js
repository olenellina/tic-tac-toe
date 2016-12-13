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

        it('should have each number map to a specific position'), function(){
            var testBoard = new Board;
            var player1 = new Player;
            var player2 = new Player;
            var testGame = new Game;
            player1.play(1);
            expect(testBoard.show()[0][0]).toEqual("X")
        }

    //     it('should create a new game with two players and a board')
    //         var testBoard = new Board
    // });
});
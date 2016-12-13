import Board from "board"
import Game from "game"
import Player from "player"

describe('Board', function() {

  describe('show', function() {
        it('should return a 2D array', function() {
        	var testBoard = new Board;
           console.log("testboard:", testBoard.show());
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


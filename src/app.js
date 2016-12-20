"use strict";

// $(document).ready(function(){
//     let turnCounter = 0;
//     let gameEnd = false;
//     let player1 = "";
//     let player2 = "";
//     const players = ["X", "O"];
//
//     $('#board').hide();
//     $('#clear-board').hide();
//
//       $('#new-game').on('click',function(){
//         player1 = $('#player1').val().toString();
//         player2 = $('#player2').val().toString();
//         clearBoard();
//         $('#board').show();
//         $('#clear-board').show();
//         $('#new').hide();
//       });
//
//       $('#board').find('td').on('click', function(){
//         $('#game-status').empty();
//         // if the game has ended, do not allow any further player moves
//         if (gameEnd === true) {
//           $('#game-status').append("Game Over");
//         // if a player has already played that game-square, disallow that move
//         } else if ($(this).text() === "X" || $(this).text() === "O") {
//           $('#game-status').append("Invalid Move");
//         // otherwise, allow move and check to see if the game has been won
//         } else if (gameEnd === false) {
//           $(this).text(players[turnCounter % 2]);
//           isWon(players[turnCounter % 2]);
//           turnCounter++;
//         }
//       });
//
//     let isWon = function(player){
//       let gameBoard = [];
//       for (let i = 1; i <= 9; i++) {
//         gameBoard[i - 1] = $('#board').find("#" + i).text();
//       }
//
//       // horizontal row:
//       if (checker(gameBoard[0], gameBoard[1], gameBoard[2]) ||
//       checker(gameBoard[3], gameBoard[4], gameBoard[5]) ||
//       checker(gameBoard[6], gameBoard[7], gameBoard[8])) {
//         gameOver(gameBoard, player, " has won!");
//         return;
//       }
//
//       // vertical row:
//       if (checker(gameBoard[0], gameBoard[3], gameBoard[6]) ||
//       checker(gameBoard[1], gameBoard[4], gameBoard[7]) ||
//       checker(gameBoard[2], gameBoard[5], gameBoard[8])) {
//         gameOver(gameBoard, player, " has won!");
//         return;
//       }
//
//   		// Diagonal:
//       if (checker(gameBoard[0], gameBoard[4], gameBoard[8]) ||
//       checker(gameBoard[6], gameBoard[4], gameBoard[2])) {
//         gameOver(gameBoard, player, " has won!");
//         return;
//       }
//
//       // Final Case (checks for tie)
//       if (turnCounter === 8) {
//         let player = "Draw";
//         gameOver(gameBoard, player, ": no winner");
//         return;
//       }
//     };
//
//     let checker = function(gameBoard1, gameBoard2, gameBoard3) {
//       if (gameBoard1 + gameBoard2 + gameBoard3 !== '') {
//     	   return (gameBoard1 === gameBoard2 && gameBoard2 === gameBoard3);
//     	}
//     };
//
//     let gameOver = function(gameBoard, player, message) {
//       let outcome = player;
//       for (let i = 0; i < gameBoard.length; i++) {
//         if (gameBoard[i] === "") {
//           gameBoard[i] = " ";
//         }
//       }
//       if (player === players[0]) {
//         $('#game-status').empty().append(player1 + message);
//       } else {
//         $('#game-status').empty().append(player2 + message);
//       }
//       gameEnd = true;
//       $('#new').show();
//       $('#clear-board').hide();
//       player1 = $('#player1').val("");
//       player2 = $('#player2').val("");
//     };
//
//     let clearBoard = function() {
//       $('#game-status').empty();
//       $('.game-square').text('');
//       turnCounter = 0;
//       gameEnd = false;
//     };
//
//     $('#clear-board').on('click', function() {
//       clearBoard();
//     });
//
// });

$(document).ready(function(){
    const players = ["X", "O"];

    var Game = function(player1, player2) {
      this.turnCounter = 0;
      this.gameEnd = false;
      this.player1 = player1;
      this.player2 = player2;
    };

    // now game is in scope for all methods within document.ready function
    var game;


    $('#board').hide();
    $('#clear-board').hide();

    $('#new-game').on('click',function(){
      game = new Game($('#player1').val().toString(), $('#player2').val().toString());
      game.clearBoard();
      $('#board').show();
      $('#clear-board').show();
      $('#new').hide();
    });

    $('#board').find('td').on('click', function(){
      $('#game-status').empty();
      // if the game has ended, do not allow any further player moves
      if (game.gameEnd) {
        $('#game-status').append("Game Over");
      // if a player has already played that game-square, disallow that move
      } else if ($(this).text() === "X" || $(this).text() === "O") {
        $('#game-status').append("Invalid Move");
      // otherwise, allow move and check to see if the game has been won
    } else if (!game.gameEnd) {
        $(this).text(players[game.turnCounter % 2]);
        game.isWon(players[game.turnCounter % 2]);
        game.turnCounter++;
      }
    });

    Game.prototype.isWon = function(player) {
      let gameBoard = [];
      for (let i = 1; i <= 9; i++) {
        gameBoard[i - 1] = $('#board').find("#" + i).text();
      }

      // horizontal row:
      if (this.checker(gameBoard[0], gameBoard[1], gameBoard[2]) ||
      this.checker(gameBoard[3], gameBoard[4], gameBoard[5]) ||
      this.checker(gameBoard[6], gameBoard[7], gameBoard[8])) {
        this.gameOver(gameBoard, player, " has won!");
        return;
      }

      // vertical row:
      if (this.checker(gameBoard[0], gameBoard[3], gameBoard[6]) ||
      this.checker(gameBoard[1], gameBoard[4], gameBoard[7]) ||
      this.checker(gameBoard[2], gameBoard[5], gameBoard[8])) {
        this.gameOver(gameBoard, player, " has won!");
        return;
      }

  		// Diagonal:
      if (this.checker(gameBoard[0], gameBoard[4], gameBoard[8]) ||
      this.checker(gameBoard[6], gameBoard[4], gameBoard[2])) {
        this.gameOver(gameBoard, player, " has won!");
        return;
      }

      // Final Case (checks for tie)
      if (this.turnCounter === 8) {
        let player = "Draw";
        this.gameOver(gameBoard, player, ": no winner");
        return;
      }
    };

    Game.prototype.checker = function(gameBoard1, gameBoard2, gameBoard3) {
      if (gameBoard1 + gameBoard2 + gameBoard3 !== '') {
    	   return (gameBoard1 === gameBoard2 && gameBoard2 === gameBoard3);
    	}
    };

    Game.prototype.gameOver = function(gameBoard, player, message) {
      let outcome = player;
      for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === "") {
          gameBoard[i] = " ";
        }
      }
      if (player === players[0]) {
        $('#game-status').empty().append(this.player1 + message);
      } else {
        $('#game-status').empty().append(this.player2 + message);
      }
      this.gameEnd = true;
      $('#new').show();
      $('#clear-board').hide();
      this.player1 = $('#player1').val("");
      this.player2 = $('#player2').val("");
    };

    Game.prototype.clearBoard = function() {
      $('#game-status').empty();
      $('.game-square').text('');
      this.turnCounter = 0;
      this.gameEnd = false;
    };

    $('#clear-board').on('click', function() {
      game.clearBoard();
    });

});

"use strict";

$(document).ready(function(){
    const playerTags = ["X", "O"];

    let Game = function(player1, player2) {
      this.board = [];
      this.turnCounter = 0;
      this.gameEnd = false;
      this.players = [player1, player2];
      this.winner = "";
    };

    // now game is in scope for all methods within document.ready function
    let game;


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
        $(this).text(playerTags[game.turnCounter % 2]);
        game.isWon(playerTags[game.turnCounter % 2]);
        game.turnCounter++;
      }
    });

    Game.prototype.isWon = function(player) {
      for (let i = 1; i <= 9; i++) {
        this.board[i - 1] = $('#board').find("#" + i).text();
      }

      // horizontal row:
      if (this.checker(this.board[0], this.board[1], this.board[2]) ||
      this.checker(this.board[3], this.board[4], this.board[5]) ||
      this.checker(this.board[6], this.board[7], this.board[8])) {
        this.gameOver(this.board, player, " has won!");
        return;
      }

      // vertical row:
      if (this.checker(this.board[0], this.board[3], this.board[6]) ||
      this.checker(this.board[1], this.board[4], this.board[7]) ||
      this.checker(this.board[2], this.board[5], this.board[8])) {
        this.gameOver(this.board, player, " has won!");
        return;
      }

  		// Diagonal:
      if (this.checker(this.board[0], this.board[4], this.board[8]) ||
      this.checker(this.board[6], this.board[4], this.board[2])) {
        this.gameOver(this.board, player, " has won!");
        return;
      }

      // Final Case (checks for tie)
      if (this.turnCounter === 8) {
        let player = "Draw";
        this.gameOver(this.board, player, ": no winner");
        return;
      }
    };

    Game.prototype.checker = function(board1, board2, board3) {
      if (board1 + board2 + board3 !== '') {
    	   return (board1 === board2 && board2 === board3);
    	}
    };

    Game.prototype.gameOver = function(board, player, message) {
      this.winner = player;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
          board[i] = " ";
        }
      }
      if (player === playerTags[0]) {
        $('#game-status').empty().append(this.players[0] + message);
      } else {
        $('#game-status').empty().append(this.players[1] + message);
      }
      this.gameEnd = true;
      $('#new').show();
      $('#clear-board').hide();
      this.players = [$('#player1').val(""), $('#player2').val("")];
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

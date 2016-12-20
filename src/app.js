"use strict";

$(document).ready(function(){
    const playerTags = ["X", "O"];
    const saveGame = "http://localhost:3000/api/v1/games"

    let Game = function(player1, player2) {
      this.board = [];
      this.turnCounter = 0;
      this.gameEnd = false;
      this.players = [player1, player2];
      this.outcome = "";
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
        this.gameOver(player, " has won!");
        return;
      }

      // vertical row:
      if (this.checker(this.board[0], this.board[3], this.board[6]) ||
      this.checker(this.board[1], this.board[4], this.board[7]) ||
      this.checker(this.board[2], this.board[5], this.board[8])) {
        this.gameOver(player, " has won!");
        return;
      }

  		// Diagonal:
      if (this.checker(this.board[0], this.board[4], this.board[8]) ||
      this.checker(this.board[6], this.board[4], this.board[2])) {
        this.gameOver(player, " has won!");
        return;
      }

      // Final Case (checks for tie)
      if (this.turnCounter === 8) {
        let player = "Draw";
        this.gameOver(player, ": no winner");
        return;
      }
    };

    Game.prototype.checker = function(element1, element2, element3) {
      if (element1 + element2 + element3 !== '') {
    	   return (element1 === element2 && element2 === element3);
    	}
    };

    Game.prototype.gameOver = function(player, message) {
      this.outcome = player;
      for (let i = 0; i < this.board.length; i++) {
        if (this.board[i] === "") {
          this.board[i] = " ";
        }
      }
      if (player === playerTags[0]) {
        $('#game-status').empty().append(this.players[0] + message);
      } else if (player === playerTags[1]) {
        $('#game-status').empty().append(this.players[1] + message);
      } else if (player === "Draw"){
          $('#game-status').empty().append(player + message);
      }
      this.gameEnd = true;
      $('#new').show();
      $('#clear-board').hide();

    };

    Game.prototype.clearBoard = function() {
      $('#game-status').empty();
      $('.game-square').text('');
      this.turnCounter = 0;
      this.gameEnd = false;
    };

    Game.prototype.saveData = function() {
      return {
        "board": this.board,
        "players": [this.players[0].toString(), this.players[1].toString()],
        "outcome": this.outcome
      }
    };

    $('#clear-board').on('click', function() {
      game.clearBoard();
    });

    $('#save-game').on('click', function(e) {
      e.preventDefault();
      $.post(saveGame, game.saveData(), function(response){
        console.log(response);
      })
    });

});

$(document).ready(function(){
    let turnCounter = 0;
    let gameEnd = false;
    const players = ['X', 'O'];

      $('#board').find('td').on('click', function(){
        $('#game-status').empty();
        // if the game has ended, do not allow any further player moves
        if (gameEnd === true) {
          $('#game-status').append("Game Over");
        // if a player has already played that game-square, disallow that move
        } else if ($(this).text() === "X" || $(this).text() === "O") {
          $('#game-status').append("Invalid Move");
        // otherwise, allow move and check to see if the game has been won
        } else if (gameEnd === false) {
          $(this).text(players[turnCounter % 2]);
          isWon(players[turnCounter % 2]);
          turnCounter++;
        }
      });

    let isWon = function(player){
      let gameBoard = [];
      for (let i = 1; i <= 9; i++) {
        gameBoard[i - 1] = $('#board').find("#" + i).text();
      }

      // horizontal row:
      if (checker(gameBoard[0], gameBoard[1], gameBoard[2]) ||
      checker(gameBoard[3], gameBoard[4], gameBoard[5]) ||
      checker(gameBoard[6], gameBoard[7], gameBoard[8])) {
        gameOver(gameBoard, player, " has won!");
        return;
      }

      // vertical row:
      if (checker(gameBoard[0], gameBoard[3], gameBoard[6]) ||
      checker(gameBoard[1], gameBoard[4], gameBoard[7]) ||
      checker(gameBoard[2], gameBoard[5], gameBoard[8])) {
        gameOver(gameBoard, player, " has won!");
        return;
      }

  		// Diagonal:
      if (checker(gameBoard[0], gameBoard[4], gameBoard[8]) ||
      checker(gameBoard[6], gameBoard[4], gameBoard[2])) {
        gameOver(gameBoard, player, " has won!");
        return;
      }

      // Final Case (checks for tie)
      if (turnCounter === 8) {
        let player = "Draw";
        gameOver(gameBoard, player, ": no winner");
        return;
      }
    };

    let checker = function(gameBoard1, gameBoard2, gameBoard3) {
      if (gameBoard1 + gameBoard2 + gameBoard3 !== '') {
    	   return (gameBoard1 === gameBoard2 && gameBoard2 === gameBoard3);
    	}
    };

    let gameOver = function(gameBoard, player, message) {
      let outcome = player;

      for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === "") {
          gameBoard[i] = " ";
        }
      }

      $('#game-status').empty().append(player + message);
      gameEnd = true;
    };

    $('#new-game').on('click',function(){
      $('#game-status').empty();
      clearBoard();
      turnCounter = 0;
      $('#board').show();
      gameEnd = false;
    });

    let clearBoard = function() {
      $('.game-square').text('');
      gameEnd = false;
    };

});

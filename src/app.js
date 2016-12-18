$(document).ready(function(){
    let turnCounter = 0;
    let gameEnd = false;
    const players = ['X', 'O'];

      $('#board').find('td').on('click', function(){
        $('#game-status').empty();
        if (gameEnd === true) {
          $('#game-status').append("Game Over");
        } else if ($(this).text() === "X" || $(this).text() === "O") {
          $('#game-status').append("Invalid Move");
        } else if (gameEnd === false) {
          $(this).text(players[turnCounter % 2]);
          isWon(players[turnCounter % 2]);
          turnCounter++;
        }
      });

    let isWon = function(player){
      let element = [];
      for (let i = 1; i <= 9; i++) {
        element[i - 1] = $('#board').find("#" + i).text();
      }

      // horizontal row:
      if (checker(element[0], element[1], element[2]) ||
      checker(element[3], element[4], element[5]) ||
      checker(element[6], element[7], element[8])) {
        gameOver(player + " has won!");
        return;
      }

      // vertical row:
      if (checker(element[0], element[3], element[6]) ||
      checker(element[1], element[4], element[7]) ||
      checker(element[2], element[5], element[8])) {
        gameOver(player + " has won!");
        return;
      }

  		// Diagonal:
      if (checker(element[0], element[4], element[8]) ||
      checker(element[6], element[4], element[2])) {
        gameOver(player + " has won!");
        return;
      }

      // Final Case (checks for tie)
      if (turnCounter === 8) {
        gameOver("Tie: No winner");
        return;
      }
    };

    let checker = function(element1, element2, element3) {
      if (element1 + element2 + element3 !== '') {
    	   return (element1 === element2 && element2 === element3);
    	}
    };

    let gameOver = function(message) {
      $('#game-status').empty().append(message);
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

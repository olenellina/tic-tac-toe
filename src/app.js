$(document).ready(function(){
    let turnCounter = 0;

      $('#board').find('td').on('click', function(){
          $('#game-status').empty();
          if ($(this).text() === "X" || $(this).text() === "O") {
            $('#game-status').append("Invalid Move");
            return;
          }
          if (turnCounter % 2 === 0){
            $(this).text('X');
            isWon('X');
          } else {
            $(this).text('O');
            isWon('O');
          }
          turnCounter++;
      });


    var isWon = function(player){
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

    var checker = function(element1, element2, element3) {
      if (element1 + element2 + element3 !== '') {
    	   return (element1 === element2 && element2 === element3);
    	}
    };

    var gameOver = function(message) {
      $('#board').hide();
      $('#game-status').empty().append(message);
      clearBoard();
    };

    $('#new-game').on('click',function(){
      $('#game-status').empty();
      clearBoard();
      turnCounter = 0;
      $('#board').show();
    });

    var clearBoard = function() {
      $('.game-square').text('');
    };

});

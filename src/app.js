$(document).ready(function(){
    let turnCounter = 0;

      $('#board').find('td').on('click', function(){
            $('#game-status').empty()
            if (turnCounter % 2 === 0){
              if ($(this).text() === "X" || $(this).text() === "O") {
                $('#game-status').empty().append("Invalid Move");
                turnCounter--;
              } else {
                $(this).text('X');
                isWon('X');
              }
            } else {
              if ($(this).text() === "X" || $(this).text() === "O") {
                $('#game-status').empty().append("Invalid Move");
                turnCounter--;
              } else {
                $(this).text('O');
                isWon('O');
              }
            }
          turnCounter++;
      });


    var isWon = function(player){
      // horizontal row:
      if (checker($('#board').find('#1').text(), $('#board').find('#2').text(), $('#board').find('#3').text()) ||
      checker($('#board').find('#4').text(), $('#board').find('#5').text(), $('#board').find('#6').text()) ||
      checker($('#board').find('#7').text(), $('#board').find('#8').text(), $('#board').find('#9').text())) {
        $('#board').hide();
        $('#game-status').empty().append(player, " has won!");
        clearBoard();
        return;
      }

      // vertical row:
      if (checker($('#board').find('#1').text(), $('#board').find('#4').text(), $('#board').find('#7').text()) ||
      checker($('#board').find('#2').text(), $('#board').find('#5').text(), $('#board').find('#8').text()) ||
      checker($('#board').find('#3').text(), $('#board').find('#6').text(), $('#board').find('#9').text())) {
        $('#board').hide();
        $('#game-status').empty().append(player, " has won!");
        clearBoard();
        return;
      }

  		// Diagonal:
      if (checker($('#board').find('#1').text(), $('#board').find('#5').text(), $('#board').find('#9').text()) ||
      checker($('#board').find('#7').text(), $('#board').find('#5').text(), $('#board').find('#3').text())) {
        $('#board').hide();
        $('#game-status').empty().append(player, " has won!");
        clearBoard();
        return;
      }

      // Final Case (checks for tie)
      if (turnCounter === 8) {
        $('#board').hide();
        $('#game-status').empty().append("Tie: No winner");
        clearBoard();
      }

    };

    var checker = function(element1, element2, element3) {
      if (element1 + element2 + element3 !== '') {
    	   return (element1 === element2 && element2 === element3);
    	}
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

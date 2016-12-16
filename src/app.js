$(document).ready(function(){
    let turnCounter = 0;

      $('#board').find('td').on('click', function(){
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

      // horizontal row:
      if (checker($('#board').find('#1').text(), $('#board').find('#2').text(), $('#board').find('#3').text()) ||
      checker($('#board').find('#4').text(), $('#board').find('#5').text(), $('#board').find('#6').text()) ||
      checker($('#board').find('#7').text(), $('#board').find('#8').text(), $('#board').find('#9').text())) {
        $('#board').hide();
        $('#game-status').append(player, " has won!");
        clearBoard();
      }

      // vertical row:
      if (checker($('#board').find('#1').text(), $('#board').find('#4').text(), $('#board').find('#7').text()) ||
      checker($('#board').find('#2').text(), $('#board').find('#5').text(), $('#board').find('#8').text()) ||
      checker($('#board').find('#3').text(), $('#board').find('#6').text(), $('#board').find('#9').text())) {
        $('#board').hide();
        $('#game-status').append(player, " has won!");
        clearBoard();
      }

  		// // Diagonal:
  		// if (checker(this.boardArray[0][0], this.boardArray[1][1], this.boardArray[2][2])) {
  		// 	return this.boardArray[0][0];
  		// } else if (checker(this.boardArray[0][2], this.boardArray[1][1], this.boardArray[2][0])) {
  		// 	return this.boardArray[0][2];
  		// }

    };

    var checker = function(element1, element2, element3) {
      if (element1.match(/[a-z]/i) && element1.match(/[a-z]/i) && element1.match(/[a-z]/i)) {
    	   return (element1 === element2 && element2 === element3)
    	}
    };

    $('#newGame').on('click',function(){
      $('#game-status').hide();
      clearBoard();
      $('#board').show();
    });

    var clearBoard = function() {
      $('.game-square').text('');
    };

});

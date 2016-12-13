var Board = function(){
	this.board = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
	this.counter = 0
};

Board.prototype ={
	clear: function() {
		// Note: there might be more functionality that we'll want to add here.
		// Basically anything that is done during a new game setup to generate the board and give control to a player.
		// That functionality could also be handeled by the game or whichever function calls clear()
		this.board = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
		this.counter = 0;
		return this.board;
	},
	show: function(){

	for (let i = 0; i < this.board.length; i++) {
		console.log(this.board[i][0].toString() + " | " + this.board[i][1].toString() + " | " + this.board[i][2].toString() );
		if (i < 2) {
			console.log("---------");
		}
	}
		return this.board;
	},
	isWon: function(board) {
		this.counter += 1;
		// horizontal row:
		for (let i = 0; i < board.length; i++) {
			if (checker(board[i][0], board[i][1], board[i][2])) {
				return board[i][0];
			}
		}
		// Vertical column:
		for (let i = 0; i < board.length; i++) {
			if (checker(board[0][i], board[1][i], board[2][i])) {
				return board[0][i];
			}
		}
		// Diagonal:
		if (checker(board[0][0], board[1][1], board[2][2])) {
			return board[0][0];
		} else if (checker(board[0][2], board[1][1], board[2][0])) {
			return board[0][2];
		}
		// Final case - checks for tie
		if (this.counter === 9) {
			return "There is a draw: no winner";
		} else {
		// increment counter
			return false;
		}
	}
};

// Handles the checking of board elements
var checker = function(element1, element2, element3) {
	// Ensures that default values in board do not cause a false win
	// Null can be replaced with another placeholder value
	if (element1.match(/[a-z]/i) && element1.match(/[a-z]/i) && element1.match(/[a-z]/i)) {
		return (element1 === element2 && element2 === element3);
	} else {
  		return false;
		}
};

module.exports = Board;

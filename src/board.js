var Board = function(){
	this.boardArray = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
	this.counter = 0
};

Board.prototype ={
	clear: function() {
		// Note: there might be more functionality that we'll want to add here.
		// Basically anything that is done during a new game setup to generate the board and give control to a player.
		// That functionality could also be handeled by the game or whichever function calls clear()
		this.boardArray = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
		this.counter = 0;
		return this.boardArray;
	},
	show: function(){

	for (let i = 0; i < this.boardArray.length; i++) {
		console.log(this.boardArray[i][0].toString() + " | " + this.boardArray[i][1].toString() + " | " + this.boardArray[i][2].toString() );
		if (i < 2) {
			console.log("---------");
		}
	}
		return this.boardArray;
	},
	isWon: function() {
		this.counter += 1;
		// horizontal row:
		for (let i = 0; i < this.boardArray.length; i++) {
			if (checker(this.boardArray[i][0], this.boardArray[i][1], this.boardArray[i][2])) {
				return this.boardArray[i][0];
			}
		}
		// Vertical column:
		for (let i = 0; i < this.boardArray.length; i++) {
			if (checker(this.boardArray[0][i], this.boardArray[1][i], this.boardArray[2][i])) {
				return this.boardArray[0][i];
			}
		}
		// Diagonal:
		if (checker(this.boardArray[0][0], this.boardArray[1][1], this.boardArray[2][2])) {
			return this.boardArray[0][0];
		} else if (checker(this.boardArray[0][2], this.boardArray[1][1], this.boardArray[2][0])) {
			return this.boardArray[0][2];
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
	if (element1.match(/[a-z]/i) && element1.match(/[a-z]/i) && element1.match(/[a-z]/i)) {
		return (element1 === element2 && element2 === element3);
	} else {
  		return false;
	}
};

export default Board;

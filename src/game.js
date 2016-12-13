var Board = function(){
	this.board = [[1,2,3],[4,5,6],[7,8,9]];
};

Board.prototype ={
	show: function(){ return this.board;},
	isWon: function(board) {
		// horizontal row:
		for (let i = 0; i < board.length; i++) {
			if (checker(board[i][0], board[i][1], board[i][2])) {
				return true;
			}
		}
		// Vertical column:
		for (let i = 0; i < board.length; i++) {
			if (checker(board[0][i], board[1][i], board[2][i])) {
				return true;
			}
		}
		// Diagonal:
		if (checker(board[0][0], board[1][1], board[2][2])) {
			return true;
		} else if (checker(board[0][2], board[1][1], board[2][0])) {
			return true;
		}
		// Final case
		return false;
	}
};

var checker = function(element1, element2, element3) {
  return (element1 === element2 && element2 === element3);
};





















module.exports = Board;

import Board from "board"
import Game from "game"

var Player = function(){
	this.positions= {
		"1": [0,0],
		"2": [0,1],
		"3": [0,2],
		"4": [1,0],
		"5": [1,1],
		"6": [1,2],
		"7": [2,0],
		"8": [2,1],
		"9": [2,2]
	}
	this.tag = "";
	this.board= undefined;
	this.game = undefined;
};

Player.prototype ={


	play: function(string_num){
		//throw type error if string_num is not a valid number, ie 1-9
		if (typeof(string_num) !== "string"){
      		throw new TypeError;
    	}else if(parseInt(string_num)>9){
    		throw "ArgumentError";
    	}

		//put the player's tag in the string_num spot they designated
		//but throws error if that spot was already played in
		var x_coord=this.positions[string_num][0];
		var y_coord=this.positions[string_num][1];
		var cell=this.board.boardArray[x_coord][y_coord];

		if (cell==="x" || cell==="o"){
			throw "InvalidMoveError";
		}else{
			this.board.boardArray[x_coord][y_coord]=this.tag;
			var checkWin = this.board.isWon();
			if (checkWin === true) {
				this.board.clear();
				return "There is a draw. Game Over.";
			} else if (checkWin === "x") {
					this.board.clear();
					return "X won the game!";
				} else if (checkWin === "o") {
					this.board.clear();
					return "O won the game!";
				}
			}
	}
};


























module.exports = Player;

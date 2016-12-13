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
};

Player.prototype ={
	

	play: function(string_num){
		//throw type error if string_num is not a valid number, ie 1-9

		//put the player's tag in the string_num spot they designated
		this.board.boardArray[this.positions[string_num][0]] [this.positions[string_num][1]]=this.tag;
	}
};


























module.exports = Player;
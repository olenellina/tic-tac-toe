import Player from "player"
import Board from "board"



var Game = function(){
	this.player1 = new Player();
	this.player1.tag = "x";
	this.player2 = new Player();
	this.player2.tag = "o";
	this.board = new Board();
	this.player1.board=this.board;
	this.player2.board=this.board;
	this.player1.game = this;
	this.player1.game = this;
};

Game.prototype ={
	gameDraw: function() {
		console.log("There is a draw. Game over");
	},
	gameWon: function() {
		console.log("Someone has won the game");
	}
};



































module.exports = Game;

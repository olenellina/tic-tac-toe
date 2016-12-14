import Player from "player"
import Board from "board"

var Game = function(){
	this.player1 = new Player;
	this.player1.tag = "x";
	this.player2 = new Player;
	this.player2.tag = "o";
	this.board = new Board;
	this.player1.board=this.board;
	this.player2.board=this.board;
	this.player1.game = this;
	this.player2.game = this;
};



Game.prototype ={
	start: function(name1,name2){
		console.log("TIC-TAC-TOE");
		this.player1.name=name1;
		this.player2.name=name2;
		console.log(name1,"'s turn");
	}
	
}





























export default Game;
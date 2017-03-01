
7. Tic-Tac-Toe

function Player(user, icon) {
	this.user = 'j_nasty_fasty';
	this.icon = 'http://www.flaticon.com/';
	this.signIn = function() {
		return this.user + this.icon;
	};
}

function Game(game, board, player) {
	this.game = 'game_setup';
	this.board = 'board_setup';
	this.playerX = 'X';
	this.playerO = 'O';
}

function Move(playerToken, position) {
	this.playerTokenX = 'X'
	this.position = 4;
	this.playerTokenO = 'O'
	this.position = 2;
}

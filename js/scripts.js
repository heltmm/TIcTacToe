var symbol = "X"

function Square() {
  this.symbol = "";
  this.value;
}

Square.prototype.isOccupied = function() {
  return this.symbol ? true : false;
}

function Board(squaresGrid) {
  this.squaresGrid = squaresGrid;
  this.grid = [];
}

Board.prototype.buildBoard = function() {
  var i,j;
  for (i = 0; i < this.squaresGrid; i ++) {
    this.grid[i] = [];
    for (j = 0; j < this.squaresGrid; j ++) {
      this.grid[i][j] = new Square();
    }
  }
}
var newBoard = new Board(3);
newBoard.buildBoard();
player1 = new Player("Player 1", 0, "X")
player2 = new Player("Player 2", 0, "O")

function Player(name, score, symbol){
  this.name = name;
  this.score = score;
  this.symbol = symbol
}

Player.prototype.updateScore = function(player){
  var i,j;
  this.score = 0;
  for (i = 0; i < newBoard.squaresGrid; i ++) {
    for (j = 0; j < newBoard.squaresGrid; j ++) {
      if(this.symbol === newBoard.grid[i][j].symbol){
        this.score += newBoard.grid[i][j].value
      }
    }
  }
}

function switchPlayer() {
  if(symbol === "X"){
    symbol = "O";
  }else if(symbol === "O"){
    symbol = "X";
  }
}

// function Game(squares) {

var winningScores = [7, 56, 448, 73, 146, 292, 273, 84]

function checkWinner(Player) {
  for (var i = 1; i <= winningScores.length; i ++) {
    if ((winningScores[i] & Player.score) === winningScores[i]) {

      $("#winnerUL").append("<li>" + Player.name + " wins!</li>");

      setTimeout(function () {
      for (var i = 1; i < 10; i ++){
        $("#square" + i).html("");
        }
      }, 1000);

      newBoard = new Board(3);
      newBoard.buildBoard();

      console.log(newBoard)
    }
  }
  console.log(Player.score);
}


$(document).ready(function(){

  $("#square1").click(function(event){
    event.preventDefault();

    // for (var i = 0; i < newBoard.grid, i ++){
    //
    // }
    if (!newBoard.grid[0][0].isOccupied()) {
      newBoard.grid[0][0].symbol = symbol
      newBoard.grid[0][0].value = 1
      player1.updateScore();
      player2.updateScore();
      $("#square1").html("<h1>" + symbol + "</h1>")
      checkWinner(player1);
      checkWinner(player2);
      switchPlayer();
    }
  });
  $("#square2").click(function(event){
    event.preventDefault();
    if (!newBoard.grid[0][1].isOccupied()) {
      newBoard.grid[0][1].symbol = symbol
      newBoard.grid[0][1].value = 2
      player1.updateScore();
      player2.updateScore();
      $("#square2").html("<h1>" + symbol + "</h1>")
      checkWinner(player1);
      checkWinner(player2);
      switchPlayer();
    }
  });
  $("#square3").click(function(event){
    event.preventDefault();
    if (!newBoard.grid[0][2].isOccupied()) {
      newBoard.grid[0][2].symbol = symbol
      newBoard.grid[0][2].value = 4
      player1.updateScore();
      player2.updateScore();
      $("#square3").html("<h1>" + symbol + "</h1>")
      checkWinner(player1);
      checkWinner(player2);
      switchPlayer();
    }
  });
  $("#square4").click(function(event){
    event.preventDefault();
    if (!newBoard.grid[1][0].isOccupied()) {
      newBoard.grid[1][0].symbol = symbol
      newBoard.grid[1][0].value = 8
      player1.updateScore();
      player2.updateScore();
      $("#square4").html("<h1>" + symbol + "</h1>")
      checkWinner(player1);
      checkWinner(player2);
      switchPlayer();
    }
  });
  $("#square5").click(function(event){
    event.preventDefault();
    if (!newBoard.grid[1][1].isOccupied()) {
      newBoard.grid[1][1].symbol = symbol
      newBoard.grid[1][1].value = 16
      player1.updateScore();
      player2.updateScore();
      $("#square5").html("<h1>" + symbol + "</h1>")
      checkWinner(player1);
      checkWinner(player2);
      switchPlayer();
    }
  });
  $("#square6").click(function(event){
    event.preventDefault();
    if (!newBoard.grid[1][2].isOccupied()) {
      newBoard.grid[1][2].symbol = symbol
      newBoard.grid[1][2].value = 32
      player1.updateScore();
      player2.updateScore();
      $("#square6").html("<h1>" + symbol + "</h1>")
      checkWinner(player1);
      checkWinner(player2);
      switchPlayer();
    }
  });
  $("#square7").click(function(event){
    event.preventDefault();
    if (!newBoard.grid[2][0].isOccupied()) {
      newBoard.grid[2][0].symbol = symbol
      newBoard.grid[2][0].value = 64
      player1.updateScore();
      player2.updateScore();
      $("#square7").html("<h1>" + symbol + "</h1>")
      checkWinner(player1);
      checkWinner(player2);
      switchPlayer();
    }
  });
  $("#square8").click(function(event){
    event.preventDefault();
    if (!newBoard.grid[2][1].isOccupied()) {
      newBoard.grid[2][1].symbol = symbol
      newBoard.grid[2][1].value = 128
      player1.updateScore();
      player2.updateScore();
      $("#square8").html("<h1>" + symbol + "</h1>")
      checkWinner(player1);
      checkWinner(player2);
      switchPlayer();
    }
  });
  $("#square9").click(function(event){
    event.preventDefault();
    if (!newBoard.grid[2][2].isOccupied()) {
      newBoard.grid[2][2].symbol = symbol
      newBoard.grid[2][2].value = 256
      player1.updateScore();
      player2.updateScore();
      $("#square9").html("<h1>" + symbol + "</h1>")
      checkWinner(player1);
      checkWinner(player2);
      switchPlayer();
      console.log(newBoard);
      console.log(player1);
      console.log(player2);
    }
  });
});

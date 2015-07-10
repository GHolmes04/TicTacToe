'use strict';

var board = ["","","","","","","","",""];
  var printBoard= function(){
    console.log(board);
  };

var scoreboard = { x:0, o:0 };
var turn = "x";

var changeTurn = function(){
  if (turn === "x") {
    turn = "o";
  } else {
    turn = "x";
  }
};

var makeMove = function(player, index) {
  var move =function(){
    board[index]= player;
    return move;
  };
};

var winner;
var winR= function(player){
  if ((all3(player,0,1,2)) ||
      (all3(player,3,4,5)) ||
      (all3(player,6,7,8))){

    return player;
  }
 };

var winC= function(player){
   if ((all3(player,0,3,6)) ||
    (all3(player,1,4,7)) ||
    (all3(player, 2,5,8))){
    winner=player;
  }
};

var winD= function(player){
  if ((all3(player,0,4,8)) ||
    (all3(player,2,4,6))){
    winD=player;
  }
};
var all3=function(player, cellOne, cellTwo, cellThree) {
if((board[cellOne] === player) &&
    (board[cellTwo] === player) &&
    (board[cellThree] === player)){

  return player;
  }
};

var getWinner=function(player){
  if(winR === player || winC === player || winD === player) {
    return player;
  }
  return null;
};

var getTurn = function() {
  return turn;
};

var resetBoard= function(){
  var reset = function(){
  board = ["","","","","","","","",""];
    return reset;
  };
};

module.exports = {
  getWinner: getWinner,
  getTurn : getTurn,
  resetBoard : resetBoard,
  makeMove : makeMove,
  changeTurn: changeTurn

  // publicAlias : privateInternalFunction
};

// module.expots.checkWinner = function(){ ... };

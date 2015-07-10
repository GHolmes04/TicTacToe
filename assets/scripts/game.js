'use strict';
var $ = require('jquery');

var board = ["","","","","","","","",""];


var turn = "x";
var changeTurn = function(){

  if (turn === "x") {
    turn = "o";
  } else {
    turn = "x";
  }
};

var makeMove = function(player, index) {
    if(board[index] === "") {
      board[index] = player;
     return player;
    }
     return board[index];
    console.log( board);


};

// var winner;
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
    return player;
  }
};

var winD= function(player){
  if ((all3(player,0,4,8)) ||
    (all3(player,2,4,6))){
     return player;
  }
};
var all3=function(player, cellOne, cellTwo, cellThree) {
if((board[cellOne] === player) &&
    (board[cellTwo] === player) &&
    (board[cellThree] === player)){

  return player;
  }
  return null;
};

var getWinner=function(player){
  if(winR(player) === player || winC(player) === player || winD(player) === player) {
    return player;

  }
  return null;
};

var getTurn = function() {
  return turn;


};
var resetBoard= function(){
  // var reset = function(){
    board = ["","","","","","","","",""];
  // };
  $(".cell").html("");
  console.log('here');
  // return reset;
};



module.exports = {

  getTurn : getTurn,
  resetBoard : resetBoard,
  makeMove : makeMove,
  changeTurn: changeTurn,
  board : board,
  getWinner : getWinner,
  turn:turn

  // publicAlias : privateInternalFunction
};

// module.expots.checkWinner = function(){ ... };

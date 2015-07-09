'use strict';

var board = ["","","","","","","","",""];
var scoreboard = { x:0, o:0 };
var playerMove;
//var makeMove = function(player, move) {
//   if(turn === 'x'){
//     move = board.indexOf(playerMove);
//       if (move === "") {
//         board[move] = 'x';
//       }
//   }if(turn === 'o'){
//       if (move === "") {
//         board[move] = 'o';

//       }
//   }else{

//   }

// };
var reset = function(){
  board = ["","","","","","","","",""];
};
var checkWinner = function(player){};


var whoseTurn = function(){
  var firstmove = Math.round(Math.random(1, 1000)) % 2 ? "x" :  "o";
//  for (var i = firstmove; i < board.length ; i++) {
//    whoseTurn = i;
//  }





};




module.exports = true;

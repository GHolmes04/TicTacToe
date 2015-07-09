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
var Xcount = [];
var element = 'x';
var idx = board.indexOf(element);
while (idx != -1) {
  Xcount.push(idx);
  idx = board.indexOf(element, idx + 1);
}
//console.log(Xcount);

var Ocount = [];
var element = 'x';
var idx = board.indexOf(element);
while (idx != -1) {
  Ocount.push(idx);
  idx = board.indexOf(element, idx + 1);
}
//console.log(Ocount);


var reset = function(){
  board = ["","","","","","","","",""];
};
var checkWinner = function(player){

};
// var firstmove= 'x';
// var whoseTurn = function(firstmove){
//   for (var i = 1; i < 10; i++) {
//     (i % 2 === 1) ? (whoseTurn = 'x') && (i=i+1) : (whoseTurn = 'o') && (;
//   }

// };

module.exports = true;

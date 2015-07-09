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


//var firstTurn = function(square){
//  board[square] = 'x';
//};

var changeTurn;
  if( Xcount.length > Ocount.length){
    changeTurn = 'o';
  }else{ changeTurn = 'x';
  }


var checkWinner = function(player){

};
var reset = function(){
  board = ["","","","","","","","",""];
};


module.exports = true;

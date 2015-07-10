
var $ = require('jquery');

$(document).ready(function(){
  var Game = require('./game.js'); // = module.exports of game.js
  // Game has all of the methods specified in game.js, such as getWinner
  // e.g. Game.checkWinner();

  //Modify the DOM
  //$("#a").css("backgroundColor", "red");

  //Set events


  $('.cell').on('click', function(){
    $(this).html(Game.getTurn());
    var poop = $(this).attr("id");
    var position = function(poop){
      switch(poop) {
        case 'a': return 0;
        case 'b': return 1;
        case 'c': return 2;
        case 'd': return 3;
        case 'e': return 4;
        case 'f': return 5;
        case 'g': return 6;
        case 'h': return 7;
        case 'i': return 8;
        default : return null;
      }
    };
    $(this).html(Game.makeMove(Game.getTurn(), position(poop)));
    var winner = Game.getWinner(Game.getTurn());
    console.log(winner);
    Game.changeTurn();

    if (winner) {
      alert("Player " + winner + ' is the winner yey');

      Game.resetBoard();
    }

});
});

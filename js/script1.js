$(document).ready(function() {
/*User interface logic*/

var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

/*Backend logic*/
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


});

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

        //2. Display the result
                document.getElementById('dice-1').style.display = 'block';
                document.getElementById('dice-2').style.display = 'block';
                document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
                document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

});

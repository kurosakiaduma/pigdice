$(document).ready(function() {
/*User interface logic*/

var scores, roundScore, activePlayer, gamePlaying;



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

                //3. Update the round score IF the rolled number was NOT a 1
                      if (dice1 !== 1 && dice2 !== 1) {
                          //Add score
                          roundScore += dice1 + dice2;
                          document.querySelector('#current-' + activePlayer).textContent = roundScore;
                      } else {
                          //Next player
                          nextPlayer();
                      }

                      /*
                      if (dice === 6 && lastDice === 6) {
                          //Player looses score
                          scores[activePlayer] = 0;
                          document.querySelector('#score-' + activePlayer).textContent = '0';
                          nextPlayer();
                      } else if (dice !== 1) {
                          //Add score
                          roundScore += dice;
                          document.querySelector('#current-' + activePlayer).textContent = roundScore;
                      } else {
                          //Next player
                          nextPlayer();
                      }
                      lastDice = dice;
                      */
                  }
              });

});

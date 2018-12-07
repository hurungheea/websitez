'use strict';

var start;  //variables des timers
var temps;

var coeff = 0.15; //coeff multiplicateur
var multiplier = 1; //valeur multiplicateur
var score=1000; //score actuel

function updateScore()
{
 labelScore.text=(score*multiplier).toFixed(0);
 score++;
}

function resetScore()
{
  clearInterval(start);
  multiplier=1;
  score = 1000;
  labelScore.text=0;
}

function startScore()
{
  start = setInterval(updateScore,200);
  temps = setInterval(function(){multiplier-=coeff;},3000)
}

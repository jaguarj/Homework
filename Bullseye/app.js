// ** BULLSEYE ** //

// STEP 1:  Add click handlers to update the score to be:
//          100 points - Bullseye
//           50 points - Middle Ring
//           10 points - Outer Ring
//            0 points - Miss  (done for you)
////////////////////////////////////////////////////////////////
// STEP 2: Break down the updateScore method, write a paragraph or comment
//         how the function works line by line
////////////////////////////////////////////////////////////////
// STEP 3:  Highlight the element that was clicked on
//          using the CSS `background-color: yellow`


// BONUS:  Implement setTimeout so the background is yellow for only two seconds

// EXPLORATION: Comment out event.stopPropagation in each function, and then click
//              the inner ring. What happens?

window.onload = function() { //Window.onload // Delays the js files after the DOM has successfully loaded.
  var body = document.body;
  var ring1 = document.querySelector('.ring-1');
  var ring2 = document.querySelector('.ring-2');
  var ring3 = document.querySelector('.ring-3');

  body.addEventListener('click', bullseyeGame.miss);
  ring1.addEventListener('click', bullseyeGame.outerRing);
  ring2.addEventListener('click', bullseyeGame.middleRing);
  ring3.addEventListener('click', bullseyeGame.innerRing);
}

var bullseyeGame = {  //jQuery object.
  score: 0, //Starting score set to 0.

  updateScore: function(points) {// The update score function is declared with the parameter 'points'.
    var scoreElement = document.querySelector('.score');//A var is created to select the .score class in HTML.
    this.score += points // 'this.score' appends the points to the players score through the div class 'score' in index.html.
    scoreElement.innerHTML = `${this.score} points` // This line injects the player's score to the browser window.
  },

////////////////////////////////////////////////////////////
  miss: function(event) {
    event.stopPropagation();
///////////////////////////////////////////////////////////
  var bodyOuter = this;
  setTimeout(function(){
    bullseyeGame.updateScore(0);
    bodyOuter.style.background = 'white';
    alert('You missed!');
  }, 10);
   document.body.style.backgroundColor = 'lightblue';

    // [ALERT:] needs to be bullseyeGame because this in clickEvents refers to the html
    // element that was clicked
}, //The closing curly brace for the entire miss function.

/////////////////////////////////////////////////////////////
  outerRing: function(event) {
    event.stopPropagation();
////////////////////////////////////////////////////////////
    var outerRing = this;
  setTimeout(function() {
    bullseyeGame.updateScore(10);
    outerRing.style.backgroundColor = 'red';
    alert('You got 10 points!');
  }, 10);

  outerRing.style.backgroundColor = 'gold';
},

//////////////////////////////////////////////////////////
  middleRing: function(event) { //Step 1. trigger the function and stop execution.
    event.stopPropagation();//Done.
///////////////////////////////////////////////////////////
  var middleRing = this;
  setTimeout(function() {//Set timeout function to update points.
     bullseyeGame.updateScore(50);
     middleRing.style.backgroundColor = 'white';
     alert('You scored 50 points!');
  }, 1);

middleRing.style.backgroundColor = 'gold';
},

////////////////////////////////////////////////////////
  innerRing: function(event) {
    event.stopPropagation();
///////////////////////////////////////////////////////
    var innerRing = this;
    setTimeout(function(){
      bullseyeGame.updateScore(100);
      innerRing.style.backgroundColor = 'red';
      alert('You scored 100 points!');
    }, 1);

innerRing.style.backgroundColor = 'gold';

},
}




















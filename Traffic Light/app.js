window.onload = function() {
  var stopButton = document.querySelector('#stopButton');
  var slowButton = document.querySelector('#slowButton');
  var goButton = document.querySelector('#goButton'); //missing

  var stopLight = document.querySelector('#stopLight');
  var slowLight = document.querySelector('#slowLight');
  var goLight = document.querySelector('#goLight'); //missing

  stopButton.addEventListener('click', trafficLight.illuminateRed);
  slowButton.addEventListener('click', trafficLight.illuminateYellow);
  goButton.addEventListener('click', trafficLight.illuminateGreen);//missing
}

var trafficLight = {
  illuminateRed: function(event) {
    trafficLight.clearLights();

    stopLight.style.background = 'red';
  },
//Var trafficLight, is an object using 'Literal Notation'.
//When clicked, the first light turns red.
//The the stop light button runs the IlluminateRed func.,
//with a 'click' event
//and the color changes from black to red.


  illuminateYellow: function(event) {
    trafficLight.clearLights();

//Added clearLights func. to resolve the
//the issue of both lights 'red' and 'yellow',
//from staying on at the same time.

    slowLight.style.background = 'yellow';
  },
//The slow button activates the
//illuminateYellow func, but the light
//is blue inestead of yellow.
//To remedy this, the 'blue' value must
//be changed to 'yellow'.


  illuminateGreen: function(event) {
    trafficLight.clearLights();

  clearLights: function()
    goLight.style.background = 'green';

	}
}
//The green light was missing:
//var goButton = document.querySelector('#goButton'); //missing
//var goLight = document.querySelector('#goLight'); //missing
//goButton.addEventListener('click', trafficLight.illuminateGreen);//missing
//goLight.style.background = 'green';// added the green color of the bulb.




window.onload = function() {}

var btn1 = document.getElementById('firstButton');
firstButton.addEventListener('click', function(){
	alert('You clicked me!!');
} );

var btn2 = document.getElementById('secondButton');
secondButton.addEventListener('click', function(){
	var newParTag = document.createElement('p');
	var newTextNode = document.createTextNode("I put a new <p> tag in the container div = information! Woo hoo.");
	var divContainer = document.getElementById('information');
	newParTag.setAttribute('id', 'newP');
	newParTag.appendChild(newTextNode);
	divContainer.appendChild(newParTag);
});

var btn3 = document.getElementById('thirdButton');
thirdButton.addEventListener('click', function() {
	var divContainer = document.getElementById('information');
	var newParTag = document.getElementById('newP');
	divContainer.removeChild(newParTag);
});

// //Marens' ex.
// var thirdButton = document.getElementById('thirdButton');
//  thirdButton.addEventListener("click", function() {
//         var newDiv = document.getElementById('information');
//         var newP = document.getElementById('newP');
//         newDiv.removeChild(newP);
//     });




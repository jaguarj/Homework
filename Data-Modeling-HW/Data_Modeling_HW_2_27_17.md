1. To-Do List

Object Construction Notation

#Tasks

function Tasks (name, tracking, completion) {
	this.name = name;
	this.tracking = origin date;
	this.completion = completion date;
}

#Projects

function Projects (name, description, responsibilities ) {
	this.name = name;
	this.description = description;
	this.responsibilities = responsibilities;
}

When assigning a Task, relevant information e.g., name, origin date of task,
and completion date are significante to monitor the task lifecycle.

Projects are important to consider because projects can contain the overall info about the
tasks within the project.


2. Photo Sharing App.

function Accounts (name, id number, email) {
	this.name = name;
	this.id= id number of user username;
	this.email = email verification;
}

function Albums (name, location, photos, albums) {
	this.name = name of album;
	this.location = location of where the photo was taken (Hawaii);
	this.photos = a collection of photos.
	this.album = a collection of albums.
}

What it is relevant here is the users account and contcat info, and of course the useres photos/albums itself.

3. Home Automation Manager

function Lights = (on/off, brightnes) {
	this.on/off = on/off control for the light(s);
	this.brightness = brightness levels;
}

function Time = (time) {
	this.time = time of day to automate activation/deactivation of lights;
}

function Temperature = (temp, A/C, heat) {
	this.temp = temperatue monitoring to control thermostat;
	this.A/C = to activate/deactivate A/C;
	this.heat = to activate/deactivate heat;

}

Lights are important because this is what we will be monitoring. Time is releative because you'll want to know the
home's ambient  temp to adjust the conditions inside the home.

4. Sneaker Store

function Sneaker = (sneaker, size, color, cost) {
	this.sneaker = sneaker model;
	this.size = size of sneaker;
	this.color = sneaker color;
	this.cost = sneaker cost;
}

function Availability = (store, stock) {
	this.store = to check what store carries the sneaker;
	this.stock = inventory;
}

function Order = (cart, order time, order completion) {
	this.cart = place item in cart for purchase;
	this.order = when the order was generated;
	this.completion = the order was complete and ready to ship;
}

function Shipping = (method, locaiton, cost) {
	this.method = type of delivery, rush order or standard snail mail;
	this.location = place to ship sneaker order;
	this.cost = cost of shipping w/ tax;
}

Sneaker model is important because this is the selection of sneaker models available to the customer.
Availability is important b/c you'll want to know how many sneaker models are in stock and perhaps what warehouse location the sneakers live.
Order progress to determine order fill completion.
Shipping is needed to ship the order to the customer.

5. Subway System

The lack of info about how many stations are on the various lines to tell the passenger is a disadvantage.
An advantage to the rail line would be that the green line has a name of the station as a reference as individual objects.


6. Doctor Appoinment App

An advantage for the first option would be that it's easy to see the doctors schedule. A disadvantage might be seeing a patients
knowing the patients other doctors or medical history.

The second approached would have a disadvantage by having to search through the appointments to find the
patients doctor, but it would be easier to search the appoinments for the patients info.

7. Tic-Tac-Toe

function Player(user, icon) {
	this.user = 'j_nasty_fasty';
	this.icon = 'http://www.flaticon.com/';
	this.signIn = function() {
		return this.user + this.icon;
	};
}

function Game(game, board, player) {
	this.game = 'game_setup';
	this.board = 'board_setup';
	this.playerX = 'X';
	this.playerO = 'O';
}

function Move(playerToken, position) {
	this.playerTokenX = 'X'
	this.position = 4;
	this.playerTokenO = 'O'
	this.position = 2;
}

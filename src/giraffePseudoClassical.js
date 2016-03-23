//pseudo-classical inheritence example

var Giraffe = function(name, height) {
  // When a new Giraffe object is instantiated (new Giraffe()),
  // the pseudo-classical inheritance pattern automatically 
  // creates of an object, as well as returns it.
  // Because of that, we will need to use the keyword 'this' to be 
  // able to access the properties of the newly instantiated object.
  this.name = name;
  this.height = height;
  this.hunger = 10;
};

// The keyword 'prototype' sets up a delegation fallback for a 
// Giraffe object. One of the aims of using the pseudo-classical 
// pattern is to avoid creating every method each time an object 
// is instantiated, and rather "point" to the methods.
Giraffe.prototype.isTallEnough = function(treeHeight) {
  return this.height > treeHeight;
};

Giraffe.prototype.isHungry = function() {
  return this.hunger > 0;
};

Giraffe.prototype.say = function(option) {
  var sentences = {
    'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
    'notHungry': this.name + ' is not hungry.',
    'notTallEnough': this.name + ' is too short to reach the trees.',
    'ate': 'That was delicious!'
  };

  return console.log(sentences[option]);
};

Giraffe.prototype.eat = function() {
  if (this.isHungry()) {
    this.hunger -= this.height;
    this.say('ate');
  } else {
    this.say('notHungry');
  }
};

Giraffe.prototype.browse = function() {
  if (this.isTallEnough(2)) {
    this.eat();
  } else {
    this.say('notTallEnough')
  }
};

// should work if code below is executed
var Stanley = new Giraffe('stanley', 5);


// The prototypal pattern is used best for subclasses, 
// in which you want to customize the properties, but 
// still inherit the same methods. 

var giraffeMaker = function(name, height) {
  // Using 'Object.create' vs '.prototype' will create 
  // an object with a specific methods 'giraffeMaker.stuff'
  // that will only apply to 'newGiraffe'.
  var newGiraffe = Object.create(giraffeMaker.stuff);
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;

  return newGiraffe;
};

// Creating an object that will house the methods of 'giraffeMaker'
giraffeMaker.stuff = {};

giraffeMaker.stuff.isTallEnough = function(treeHeight) {
    return this.height > treeHeight;
  };

giraffeMaker.stuff.isHungry = function() {
  return this.hunger > 0;
};

giraffeMaker.stuff.say = function(option) {
  var sentences = {
    'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
    'notHungry': this.name + ' is not hungry.',
    'notTallEnough': this.name + ' is too short to reach the trees.',
    'ate': 'That was delicious!'
  };

  return console.log(sentences[option]);
};

giraffeMaker.stuff.eat = function() {
  if (this.isHungry()) {
    this.hunger -= this.height;
    this.say('ate');
  } else {
    this.say('notHungry');
  }
};

giraffeMaker.stuff.browse = function() {
  if (this.isTallEnough(2)) {
    this.eat();
  } else {
    this.say('notTallEnough')
  }
};

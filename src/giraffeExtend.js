// Using 'extend' separates the properties and methods 
// for the giraffeMaker class, making it easier to read.  
// Also, this pattern prevents the sharing of the 
// 'giraffeMethods' globally. 

var giraffeMaker = function(name, height) {
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;

  // Extend the methods defined in the 
  // 'giraffeMaker.giraffeMethods' below
  _.extend(newGiraffe, giraffeMaker.giraffeMethods);

  return newGiraffe;
};

// Creating an object that will contain methods 
// to be extended to the giraffeMaker class
giraffeMaker.giraffeMethods = {};

// Adding a method property to the methods object
giraffeMaker.giraffeMethods.isTallEnough = function(treeHeight) {
  return this.height > treeHeight;
};

giraffeMaker.giraffeMethods.isHungry = function() {
  return this.hunger > 0;
};

giraffeMaker.giraffeMethods.say = function(option) {
  var sentences = {
    'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
    'notHungry': this.name + ' is not hungry.',
    'notTallEnough': this.name + ' is too short to reach the trees.',
    'ate': 'That was delicious!'
  };

  return console.log(sentences[option]);
};

giraffeMaker.giraffeMethods.eat = function() {
  if (this.isHungry()) {
    this.hunger -= this.height;
    this.say('ate');
  } else {
    this.say('notHungry');
  }
};


giraffeMaker.giraffeMethods.browse = function() {
  if (this.isTallEnough(2)) {
    this.eat();
  } else {
    this.say('notTallEnough');
  }
};

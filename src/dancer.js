<<<<<<< HEAD
// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class = "dancer"></span>');
=======
var makeDancer = function (top, left, timeBetweenSteps, typeOfDancer) {
  this.typeOfDancer = typeOfDancer;
  this.$node = $(typeOfDancer);
>>>>>>> 4da480512bf289232b3e9c99451503c42a8b8de3
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
<<<<<<< HEAD
=======

>>>>>>> 4da480512bf289232b3e9c99451503c42a8b8de3
makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
<<<<<<< HEAD
  };
  this.$node.css(styleSettings);
};
=======
  }
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(position, type) {
  this.setPosition(position*100, type*5);
}
>>>>>>> 4da480512bf289232b3e9c99451503c42a8b8de3

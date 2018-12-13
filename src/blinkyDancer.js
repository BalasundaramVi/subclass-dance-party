<<<<<<< HEAD
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
=======
var makeBlinkyDancer = function (top, left, timeBetweenSteps, type) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, this.timeBetweenSteps, type);
>>>>>>> 4da480512bf289232b3e9c99451503c42a8b8de3
}

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
<<<<<<< HEAD
};
=======
}
>>>>>>> 4da480512bf289232b3e9c99451503c42a8b8de3

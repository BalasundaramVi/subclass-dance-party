var makeBlinkyDancer = function (top, left, timeBetweenSteps, type) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, this.timeBetweenSteps, type);
}

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
}

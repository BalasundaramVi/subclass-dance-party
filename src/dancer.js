var makeDancer = function (top, left, timeBetweenSteps, typeOfDancer) {
  this.typeOfDancer = typeOfDancer;
  this.$node = $(typeOfDancer);
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  }
  this.$node.css(styleSettings);
};
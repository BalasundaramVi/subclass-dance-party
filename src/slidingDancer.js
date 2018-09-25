var makeSlidingDancer = function(top, left, timeBetweeenSteps, type) {
    this.timeBetweeenSteps = timeBetweeenSteps;
    makeDancer.call(this, top, left, this.timeBetweeenSteps, type);
}

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);

makeSlidingDancer.prototype.constructor = makeSlidingDancer;

makeSlidingDancer.prototype.oldStep = makeDancer.prototype.step;

makeSlidingDancer.prototype.step = function() {
    this.oldStep();
    this.$node.addClass('slide');
}
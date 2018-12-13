var makeShakingDancer = function(top, left, timeBetweeenSteps, type) {
    this.timeBetweeenSteps = timeBetweeenSteps;
    makeDancer.call(this, top, left, this.timeBetweeenSteps, type);
}

makeShakingDancer.prototype = Object.create(makeDancer.prototype);

makeShakingDancer.prototype.constructor = makeShakingDancer;

makeShakingDancer.prototype.oldStep = makeDancer.prototype.step;

makeShakingDancer.prototype.step = function() {
    this.oldStep();
    this.$node.addClass('shake');
}
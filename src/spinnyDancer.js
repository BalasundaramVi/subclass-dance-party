var makeSpinnyDancer = function(top, left, timeBetweenSteps, type) {
    this.timeBetweenSteps = timeBetweenSteps;
    makeDancer.call(this, top, left, this.timeBetweenSteps, type);
}

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);

makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.oldStep = makeDancer.prototype.step;

makeSpinnyDancer.prototype.step = function() {
    this.oldStep();
    this.$node.addClass('spin');
}
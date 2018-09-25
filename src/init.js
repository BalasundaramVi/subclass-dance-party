$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dataType = $(this).data('dancer-type');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      dataType
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event) {
    var cCount = 0;
    var aCount = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].typeOfDancer === '<img src="assets/images/c3p0.png" class="dancer"></img>') {
        cCount++;
        window.dancers[i].lineUp(cCount, 300);
      } else {
        aCount++;
        window.dancers[i].lineUp(aCount, 10);
      }
    }
  })

  $('.deathstar').on('click', function(event) {
    Interact();
  });
  setTimeout(Interact, 5000);
});

var Interact = function() {
  for (var i = 0; i < window.dancers.length; i++) {

    var maxDistance = 300;
    var currentDancer = window.dancers[i];
    var cX = currentDancer.$node["0"].x;
    var cY = currentDancer.$node["0"].y;
    var tX, tY;

    var closestNeighbor;
    for (var j = 0; j < window.dancers.length; j++) {
      if (i === j) {
        continue;
      }
      var compareDancer = window.dancers[j];
      var nX = compareDancer.$node["0"].x;
      var nY = compareDancer.$node["0"].y;
      var distance = Math.sqrt(Math.pow((cX-nX), 2) + Math.pow((cY-nY), 2));
      if (distance < maxDistance) {
        closestNeighbor = window.dancers[j];
        maxDistance = distance;
        tX = nX;
        tY = nY;
      }
    }

    if (closestNeighbor !== undefined) {
      currentDancer.setPosition((cY + tY)/2, (cX + tX)/2 - 60);
      closestNeighbor.setPosition((cY + tY)/2, (cX + tX)/2 + 60);
    }
  }

  setTimeout(Interact, 5000);
}
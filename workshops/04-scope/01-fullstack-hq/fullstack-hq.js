// Edit the code below
let place1 = "Planet Earth";

function fullstackHQ() {
  return middleFunction("United States");

  function middleFunction(aplace) {
    return innerFunction("New York State");

    function innerFunction(place) {
      place2 = "New York City";
      return innermostFunction();

      function innermostFunction() {
        return (
          "Fullstack HQ is at " +
          place1 +
          ", " +
          aplace +
          ", " +
          place +
          ", " +
          place2
        );
      }
    }
  }
}

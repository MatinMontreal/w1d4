// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  })
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + (i) +"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// A very common implementation of callback functions is with forEach which uses callbacks to allow us to easily iterate through the elements of an array.

// Read about iterating through elements of an array using JavaScript's Array.prototype.forEach() method.

// Refactor the function findWaldo to use the forEach() method instead of a for loop.

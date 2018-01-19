function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var i = -1;
  return function() {
    i += 1;
    return list[i];
  };
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 6





function countdownGenerator(x) {
  /* your code here */
//input x and start a countdown
// if x = 0 then change the message
// if x < 0 then change the message again

  return function() {
    if (x > 0) {
      console.log ("T minus " + x + "...");
    }
    else if (x === 0) {
        console.log ("Blast Off!");
      }
    else (console.log ("Rockets already gone, bub!"))

    x -= 1;
  }
}




var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

var words = ["ground", "control", "to", "major", "tom"];


var counter = words.map(function(element) {
  return element.length
  })

console.log(counter);

// map(words, function(word) {
//   return word.length;
// });

var Capitals = words.map(function(element){
return element.toUpperCase()
  })

console.log(Capitals);


// map(words, function(word) {
//   return word.toUpperCase();
// });


var reversal = words.map(function(element){
    return element.split("").reverse().join("");
  })

console.log(reversal)





// map(words, function(word) {
//   return word.split('').reverse().join('');
// });
// And the following is what the above implementations should return, in order.

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]






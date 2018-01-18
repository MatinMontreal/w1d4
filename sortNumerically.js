 var array = [10, 2, 5, 1, 9];
 array.sort(function(a,b){
   return a-b
 }
 )

console.log(array);


//Sort numerically and ascending:
// var myarray=[25, 8, 7, 41]
// myarray.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
//     return a - b
// })

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b){
  if (a.name < b.name) {
    return -1;
  }
  else if (a.name > b.name) {
    return 1;
  }
  else {return b.age - a.age}
});

console.log(students);

// Write a sorting function (sometimes called a custom comparator), that sorts the above array first by the name ascending alphabetically,
// and in cases where the names are equal sort by descending age.
// Read about the Array.prototype.sort() function on MDN in order to implement your solution
// Did you notice that the sort() function modifies the array being sorted, whereas filter() and map() functions produced new arrays?


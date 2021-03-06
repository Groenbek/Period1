// a) Make your own filter function
let myArray = ["Hans", "Er", "Nogenlunde"];

function myFilter(array, callback) {
  let arrayCopy = [];
  array.forEach((element) => {
    const newItem = callback(element);
    if (newItem !== undefined) {
      arrayCopy.push(newItem);
    }
  });
  return arrayCopy;
}

//Compare with the real filter
console.log(myArray.filter((word) => word.length < 4));

//Test homemade filter
console.log(
  myFilter(myArray, (a) => {
    if (a.length < 4) {
      return a;
    }
  })
);

// b) Make your own map function
function myMap(array, callback) {
  let arrayCopy = [];
  array.forEach((element) => {
    const newItem = callback(element);
    arrayCopy.push(newItem);
  });
  return arrayCopy;
}

//Compare with the real map
console.log(myArray.map((x) => x + "..."));
console.log(
  myMap(myArray, (a) => {
    return (a += "...");
  })
);

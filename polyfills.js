let arr = [1, 2, 3, 4, 5];

// arr.forEach((item) => console.log(item * item));

// Polyfill of forEach.

Array.prototype.myForEach = function (callback) {
  // callback here is the callback function
  // which actual .forEach() function accepts
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this); // currentValue, index, array
  }
};

// arr.myForEach((item, idx) => console.log("My forEach", item * item));

// Polyfill of map.

Array.prototype.myMap = function (callback) {
  var arr = []; // since, we need to return an array
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this)); // pushing currentValue, index, array
  }
  return arr; // finally returning the array
};

// let output = arr.map((item) => item * item);
// console.log(output);
// let output1 = arr.myMap((item) => item * item);
// console.log(output1);

// Polyfill of filter.

var logicAlbums = [
  {
    name: "Bobby Tarantino",
    rating: 5,
  },
  { name: "The Incredible True Story", rating: 4.5 },
  {
    name: "Supermarket",
    rating: 4.9,
  },
  { name: "Under Pressure", rating: 5 },
];

// let output = logicAlbums.filter((album) => {
//   return album.rating > 4.9;
// });
// console.log(output);
// console.log(logicAlbums);

Array.prototype.myFilter = function (callback, context) {
  arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
// let output = logicAlbums.myFilter(function (album) {
//   return album.rating > 4.9; // providing the context here
// });
// console.log(output);

// Polyfill of reduce.

var logicAlbums = [
  "Bobby Tarantino",
  "The Incredible True Story",
  "Supermarket",
  "Under Pressure",
];
// var withReduce = logicAlbums.reduce(function (a, b) {
//   return a + " , " + b;
// }, "Young Sinatra"); // Here we are initialising the array with value as 'Young Sinatra'

// console.log(withReduce);
// Young Sinatra , Bobby Tarantino , The Incredible True Story , Supermarket , Under Pressure

Array.prototype.myReduce = function (callback, initialValue) {
  var accumulator = initialValue === undefined ? undefined : initialValue;

  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

var withMyReduce = logicAlbums.myReduce(function (a, b) {
  return a + " , " + b;
}, "Young Sinatra");

console.log(withMyReduce);

let totalSum = arr.myReduce((a, b) => {
  return a + b;
}, 0);
console.log(totalSum);

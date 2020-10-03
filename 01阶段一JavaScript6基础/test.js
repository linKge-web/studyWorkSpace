// let a = 'code';
// {
//   console.log(a);  //code
//   a = 'hello';
// }
// console.log(a);
// {
//   let a = 'world';
//   console.log(a);  //world
// }
// console.log(a); //hello

// let res1 = Array.of(2); 
// console.log(res1);  // //[ 2 ]

// let res2 = Array.of(1,2,3,4);
// console.log(res2);  //[ 1, 2, 3, 4 ]

// if(!Array.of) {
//   return function() {
//     return Array.prototype.slice.call(arguments);
//   }
// }

// let arr = [
//   1,2,
//   [
//     3,
//     [4,5]
//   ]
// ]
// console.log(arr.flat(1));  //[ 1, 2, 3, [ 4, 5 ] ]
// console.log(arr.flat(2)); //[ 1, 2, 3, 4, 5 ]
// console.log(arr.flat(Infinity));  //到最后一层： [ 1, 2, 3, 4, 5 ]

// let arr = [
//   [1,2],
//   [3,4],
//   [6,8]
// ];
// let arr2 = arr.flatMap(item => {
//   item = item.filter(item => item >= 2);
//   return item;
// });
// console.log(arr2);  //[ 2, 3, 4, 6, 8 ]

// let arr = ["a","b","c","d","e"];
// arr.fill("f",1,3);
// console.log(arr); //[ 'a', 'f', 'f', 'd', 'e' ]

let arr = ["a","b","c","d"];
console.log(arr.includes('a'));  //true
console.log(arr.includes("a",-3));  //false
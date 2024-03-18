let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
let arr2 = arr.map((item) => {
  return item * 2;
} );
console.log(arr2);
//The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
let arr3 = arr.filter((item) => {
    return item % 2 === 0;
    });
console.log(arr3);
//The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
let arr4 = arr.reduce((acc, item) => {
    return acc+item;
    },0);
console.log(arr4);

//find the max number in an array

let arr5 = arr2.reduce((function(max, cur){
    if(cur > max) return cur;
}), 0);
console.log(arr5);

//Slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
//The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.


brr= [44,33,67,47,8,98,44,21,47,10,44,22,33];

let arr6 = brr.slice().sort((a, b) => a - b);
console.log(arr6);
console.log(brr);

let arr7 = brr.sort((a, b) => b - a);
console.log(arr7);
console.log(brr);
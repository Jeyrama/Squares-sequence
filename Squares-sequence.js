/*
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
Examples

2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/


// Solution

function squares(x, n) {
  var ret = [];
  for(var i=0; i<n; i++){
    ret.push(x);
    x*= x;
  }
  return ret;
}

// or

function squares(x, n) {
  let arr = [];
  if(n === 0 || n < 0) return arr;
  for(let i = x; arr.length < n; i*=i) {
      arr.push(i);
  }
  return arr
}
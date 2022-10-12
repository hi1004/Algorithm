const arr = [9, 8, 7, 6, 5, 4, 10, 2, 1, 0];

// solution01
function linearSearch1(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
console.log(linearSearch1(arr, 10));

// solution02
function linearSearch2(arr, val) {
  return arr.indexOf(val);
}
console.log(linearSearch2(arr, 10));

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input.shift());
const nums = input.slice().map(num => num.split(' ').map(Number));

const results = [];
nums.forEach(arr => {
  const srotedArr = arr.sort((a, b) => a - b);
  const setArr = [...new Set(arr)];
  const size = new Set(arr).size;

  if (size === 1) {
    results.push(10000 + 1000 * setArr[0]);
  } else if (size === 2) {
    results.push(1000 + 100 * srotedArr[1]);
  } else {
    results.push(100 * Math.max(...setArr));
  }
});
console.log(Math.max(...results));

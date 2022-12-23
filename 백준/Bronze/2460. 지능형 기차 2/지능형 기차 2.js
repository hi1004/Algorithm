const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');
const arr = input.slice().map(n => n.split(' ').map(Number));

const maxArr = [];
let sum = arr[0][1];
for (let i = 1; i <= arr.length - 1; i++) {
  const [a, b] = arr[i];
  if (a > b) {
    maxArr.push(sum - Math.abs(-a + b));
  } else {
    maxArr.push(sum + Math.abs(-a + b));
  }
  sum = maxArr[i - 1];
}
console.log(Math.max(...maxArr));

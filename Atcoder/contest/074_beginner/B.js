const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = input.shift();
const k = Number(input.shift());
const [arr] = input.map(n => n.split(' ').map(Number));

let sum = 0;
for (let i = 1; i <= n; i++) {
  if (k - arr[i - 1] > arr[i - 1]) {
    sum += arr[i - 1] * 2;
  } else {
    sum += (k - arr[i - 1]) * 2;
  }
}
console.log(sum);

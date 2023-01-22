const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [N, T] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);

let answer = 0;
var start = arr[0];

arr.slice(1).forEach(n => {
  answer += Math.min(T, n - start);
  start = n;
});
answer += T;
console.log(answer);

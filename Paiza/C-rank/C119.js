const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m, k] = input.shift().split(' ').map(Number);
const b = input.map(Number);
let arr = Array.from({ length: n }).fill(0);

b.forEach(n => {
  arr[n - 1] = 1;
});

let count = 0;
const answer = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    count++;
    if (count === k) {
      break;
    }
  } else {
    count = 0;
    answer.push(arr[i]);
  }
}

console.log(answer.length);

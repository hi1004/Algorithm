const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

let prev = input.shift();
let answer = 'No';
input.forEach(n => {
  if (Math.abs(prev - n) >= 3) {
    answer = 'Yes';
  } else {
    prev = n;
  }
});
console.log(answer);

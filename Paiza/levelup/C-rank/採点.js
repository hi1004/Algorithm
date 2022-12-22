const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = input.shift();
const arr = input.slice().map(s => s.trim());

let answer = 0;
arr.forEach(val => {
  if (val === 'correct') {
    answer += 2;
  } else if (val === 'incorrect') {
    answer -= 1;
  }
});
console.log(answer);

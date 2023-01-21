const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const str = input[1];
let answer = 'b';
let count = 0;
while (answer.length < n) {
  count++;
  if (count % 3 === 1) {
    answer = `a${answer}c`;
  } else if (count % 3 === 2) {
    answer = `c${answer}a`;
  } else {
    answer = `b${answer}b`;
  }
}
if (str === answer) {
  console.log(count);
} else {
  console.log(-1);
}

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, S] = fs.readFileSync(file).toString().trim().split(/\s+/);
N = Number(N);

let answer = [0];
let count = 0;
[...S].forEach(s => {
  if (s === 'I') {
    count++;
  } else {
    count--;
  }
  answer.push(count);
});
console.log(Math.max(...answer));

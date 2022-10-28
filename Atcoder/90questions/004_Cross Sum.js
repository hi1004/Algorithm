const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(a => a.split(' ').map(Number));
console.log(inputs);

const [H, W] = inputs[0].split(' ').map(Number);

let rowSum = [];
let colSum = [];
for (let h = 1; h <= H; h++) {
  let sum = inputs[h]
    .split(' ')
    .map(Number)
    .reduce((a, b) => a + b, 0);

  rowSum.push(sum);
}

for (let w = 1; w <= W; w++) {
  let sum = 0;
  for (let h = 1; h <= H; h++) {
    sum += inputs[h].split(' ').map(Number)[w - 1];
  }
  colSum.push(sum);
}

const answer = [];
for (let h = 1; h <= H; h++) {
  const sum = inputs[h]
    .split(' ')
    .map(Number)
    .map((value, index) => rowSum[h - 1] + colSum[index] - value);
  answer.push(sum);
}
console.log(answer.map(arr => arr.join(' ')).join('\n'));

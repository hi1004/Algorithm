const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(arr => arr.split(' ').map(Number));

const answer = input.map(arr => {
  const [a, b] = arr;
  return (a * b) / 10;
});

console.log(answer.reduce((a, b) => a + b, 0));

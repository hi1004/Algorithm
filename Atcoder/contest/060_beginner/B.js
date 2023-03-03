const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, c] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const answer = [];
for (let i = 0; i < 100; i++) answer.push((a * i) % b);
console.log(answer.indexOf(c) === -1 ? 'NO' : 'YES');

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...distance] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

console.log(Math.max(...distance) - Math.min(...distance));

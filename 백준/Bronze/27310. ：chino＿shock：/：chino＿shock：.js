const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(s => (isNaN(s) ? s : +s));
console.log(input.length + 2 + (input.match(/_/g)?.length || 0) * 5);

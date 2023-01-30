const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(str => str.trim());

const answer = input.filter(s => s.includes('r')).length;
console.log(answer);

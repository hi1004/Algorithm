const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
input.pop();
console.log(
  input.map(str => str.trim().split('').reverse().join('')).join('\n')
);

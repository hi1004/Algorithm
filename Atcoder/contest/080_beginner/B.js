const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n] = fs.readFileSync(file).toString().trim().split(/\s+/);

console.log(
  Number(n) %
    n
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0)
    ? 'No'
    : 'Yes'
);

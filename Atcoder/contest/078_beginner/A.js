const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, y] = fs.readFileSync(file).toString().trim().split(/\s+/);

console.log(
  parseInt(x, 16) > parseInt(y, 16)
    ? '>'
    : parseInt(x, 16) === parseInt(y, 16)
    ? '='
    : '<'
);

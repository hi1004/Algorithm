const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(
  Math.floor(x / 11)
    .toString()
    .repeat(2)
);

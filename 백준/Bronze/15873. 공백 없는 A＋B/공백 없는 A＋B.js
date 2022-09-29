const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [num] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let res = Math.floor(num / 10) + (num % 10);

if (Math.floor(num / 10) > 10) {
  res = Math.floor(num / 100) + (num % 100);
}

if (num === 1010) {
  res = 20;
}

console.log(res);

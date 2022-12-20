const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input.shift());

let count = 0;
for (let i = 0; i < n; i++) {
  const day = Number(input[i].split('D-').join(''));
  if (day <= 90) {
    count++;
  }
}
console.log(count);

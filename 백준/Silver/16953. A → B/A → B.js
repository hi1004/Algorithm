const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

let count = 1;
let flag = true;
while (true) {
  if (b % 10 === 1) b = parseInt(b / 10);
  else b /= 2;
  count++;

  if (a === b) {
    break;
  } else if (b < a) {
    count = -1;
    break;
  }
}
console.log(count);

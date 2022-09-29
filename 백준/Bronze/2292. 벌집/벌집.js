const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [num] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let range = 1;
let sum = 1;

while (sum < num) {
  sum += 6 * range;

  range++;
}
console.log(range);

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [price, M, ...C] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const regEx = new RegExp(`[${C}]`);

while (regEx.test(String(price))) {
  price++;
}
console.log(price);

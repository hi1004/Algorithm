const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(lines.shift());

const arrs = lines[0].split(' ').map(Number);

function maxValue(arr) {
  return arr.indexOf(Math.max(...arr)) + 1;
}
console.log(maxValue(arrs));

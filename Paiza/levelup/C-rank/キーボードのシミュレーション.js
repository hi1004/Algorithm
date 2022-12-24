const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = input.shift();

let str = '';
let isUpper = false;
for (let i = 0; i < n; i++) {
  const c = input[i].split(' ').map(s => s.trim());
  if (c.includes('shift')) {
    str += c[1].toUpperCase();
  } else if (c.includes('capslock')) {
    isUpper = !isUpper;
  } else {
    str += isUpper ? c[0].toUpperCase() : c[0].toLowerCase();
  }
}
console.log(str);

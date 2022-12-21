const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input.shift());
const arrs = input.slice().map(arr => arr.split(' ').map(v => v.trim()));

const le = Math.min(
  ...arrs.filter(arr => arr.includes('le')).map(n => Number(n[1]).toFixed(1))
);
const ge = Math.max(
  ...arrs.filter(arr => arr.includes('ge')).map(n => Number(n[1]).toFixed(1))
);

console.log(ge.toFixed(1), le.toFixed(1));

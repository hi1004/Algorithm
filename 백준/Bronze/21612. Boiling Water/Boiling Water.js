const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = fs.readFileSync(file).toString().trim();

const b = Number(n);
const p = 5 * n - 400;
console.log(p);
console.log(p > 100 ? -1 : p === 100 ? 0 : 1);

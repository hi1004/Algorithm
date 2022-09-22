const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = fs.readFileSync(file).toString().trim();
console.log(Number(n) - Number(n) * 0.22);
console.log(Number(n) - Number(n) * 0.2 * 0.22);

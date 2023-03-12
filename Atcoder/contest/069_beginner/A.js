const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);
console.log((n - 1) * (m - 1));

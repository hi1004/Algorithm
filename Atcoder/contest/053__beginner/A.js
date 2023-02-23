const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);
console.log(n < 1200 ? 'ABC' : 'ARC');

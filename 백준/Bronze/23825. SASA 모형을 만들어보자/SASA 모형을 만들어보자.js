const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(Math.min(Math.floor(n / 2), Math.floor(m / 2)));

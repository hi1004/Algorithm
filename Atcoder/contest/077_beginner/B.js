const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

console.log(Math.floor(Math.sqrt(N)) ** 2);

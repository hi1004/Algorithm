const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [Y, M] = fs.readFileSync(file).toString().trim().split('\n').map(Number);

console.log(M + M - Y);

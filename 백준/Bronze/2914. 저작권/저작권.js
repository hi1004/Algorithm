const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const [A, I] = line;

console.log(A * I - (A * I) / I + 1);

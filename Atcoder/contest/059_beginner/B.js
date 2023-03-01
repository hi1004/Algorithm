const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = fs.readFileSync(file).toString().trim().split(/\s+/).map(BigInt);

console.log(A > B ? 'GREATER' : A < B ? 'LESS' : 'EQUAL');

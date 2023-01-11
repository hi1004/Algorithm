const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split('\n').map(BigInt);

console.log((a + b).toString());

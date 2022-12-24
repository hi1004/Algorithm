const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [p] = fs.readFileSync(file).toString().trim().split(' ').map(BigInt);

console.log((p * BigInt(100)).toString());

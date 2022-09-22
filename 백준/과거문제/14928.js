const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let number = fs.readFileSync(file).toString().trim().split(' ').map(BigInt);
const N = number[0];

console.log((N % BigInt(20000303)).toString());

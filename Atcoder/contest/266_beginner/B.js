const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ').map(BigInt);
const modNum = BigInt(998244353);
let x = N % modNum;

if (x < 0) x = x + modNum;

console.log(x.toString());

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(line.shift());
const nums = line[0].split(' ').map(BigInt);

const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));

const result = nums.reduce((a, b) => gcd(a, b));

console.log(result.toString());

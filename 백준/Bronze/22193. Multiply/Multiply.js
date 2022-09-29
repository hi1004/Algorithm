const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

line.shift();
const [n, m] = line.map(num => BigInt(num));
console.log(String(n * m));

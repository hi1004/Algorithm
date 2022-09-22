const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split('\n').map(BigInt);

let result = a + b + '\n';
result += a - b + '\n';
result += a * b;

console.log(result);

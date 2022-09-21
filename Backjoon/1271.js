const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split(' ').map(BigInt);

let answer = a / b + '\n';
answer += a % b;

console.log(answer);

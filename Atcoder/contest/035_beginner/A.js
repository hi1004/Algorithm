const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split(' ');
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

console.log(a / gcd(a, b) + ':' + b / gcd(a, b));

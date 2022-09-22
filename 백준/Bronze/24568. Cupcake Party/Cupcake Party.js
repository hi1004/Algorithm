const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split('\n').map(Number);

console.log(a * 8 + b * 3 - 28);

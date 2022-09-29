const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split('\n').map(Number);

console.log((a + b) % 12 === 0 ? 12 : (a + b) % 12);

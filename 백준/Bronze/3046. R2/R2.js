const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [r1, s] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(s * 2 - r1);
